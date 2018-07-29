/**
 * @file router
 * @author niminjie
 */

import {noop} from 'lodash';
import {joinUrl} from '@/utils/tools';
import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import {Message} from 'element-ui';
import {SET_USER_INFO, SET_AUTH} from '@/store/modules/user';
import {
    routes,
    api,
    noAuthorityLocation
} from '@/configs';

Vue.use(Router);

/**
 * BizRouter
 *
 * @class
 */
class BizRouter {

    /**
     * Constructor
     *
     * @constructor
     * @param {Object}        params                  params
     * @param {Array<Object>} params.routes           routes config
     * @param {Function}      params.beforeRouterInit beforeRouterInit
     * @param {Object}        params.configs          vue-router configs
     */
    constructor({routes = [], beforeRouterInit = _.noop, configs = {}}) {
        this.router = null;
        this.routerInited = false;

        this.routes = routes;
        this.beforeRouterInit = beforeRouterInit;
        this.configs = configs;
    }

    /* eslint-disable fecs-prefer-class, no-spaced-func */

    /**
     * Common routes
     *
     * @type {Array<Object>}
     */
    commonRoutes = [
        {
            path: noAuthorityLocation,
            name: '403',
            component: () => import('@/views/Page403')
        },
        {
            path: '*',
            name: '404',
            component: () => import('@/views/Page404')
        }
    ]

    /* eslint-enable fecs-prefer-class, no-spaced-func */

    /**
     * 在进入路由之前调用，如果成功了，则不会再调用
     * 如果失败了，切换路由的时候每次还会再重试，直到成功
     *
     * @return {Promise}
     */
    async _beforeRouterInit() {
        this.routerInited = true;

        let result;
        try {
            result = await this.beforeRouterInit();
        }
        catch (ex) {
            const msg = '系统初始化失败，请稍候再试。';
            console.error(msg, ex);
            throw new Error(msg);
        }

        return result;
    }

    /**
     * 每次跳转路由
     *
     * @param {Object}   to   to   router
     * @param {Object}   from from router
     * @param {Function} next next function
     */
    async _beforeEach(to, from, next) {
        console.groupCollapsed(`Routing from: ${from.name} to: ${to.name}`);
        console.log('=> From: ', from);
        console.log('=> To: ', to);
        console.groupEnd();

        // 路由还没有初始化
        if (!this.routerInited) {
            try {
                await this._beforeRouterInit();
            }
            catch (ex) {

                // 初始化失败，下次重试
                this.routerInited = false;
                Message.error({message: ex.message});
                return;
            }
        }

        const {hasPermission = () => true} = to.meta;

        const userInfo = store.state.user;

        // 判断是否有权限
        if (!hasPermission(userInfo, to)) {
            console.warn('User:', userInfo, 'has no permission to: ', to);
            next(noAuthorityLocation);
        }
        else {
            next();
        }
    }

    /**
     * 路由报错
     *
     * @param {Error} err error
     */
    _onError(err) {
        console.error('Error', err);
        this.router.push(noAuthorityLocation);
    }

    /**
     * 创建 `vue-router`
     *
     * @return {Router}
     */
    create() {
        let router = new Router({
            routes: [
                ...flattenRoute(this.routes),
                ...this.commonRoutes
            ],
            ...this.configs
        });

        router.beforeEach(::this._beforeEach);
        router.onError(::this._onError);

        this.router = router;
        return router;
    }
}

const configs = {
    routes,
    async beforeRouterInit() {
        // const userSchema = userFactory(MU_USER);

        // 没有用户信息，就去取，然后存到store里面
        let account = await api.getAccount();

        // 从 `cookie` 中读数据
        let userInfo = {
            // userName: getCookie(userSchema.name) || 'user'
            userName: 'user'
        };

        store.dispatch(SET_USER_INFO, userInfo);
        store.dispatch(SET_AUTH, account.user);
    }
};

function flattenRoute(routes = []) {
    return routes.reduce((ret, route) => {
        if (route.component) {
            ret.push(route);
        }

        if (route.children && route.children.length) {
            route.children.forEach(subRoute => ret.push({
                ...subRoute,
                path: joinUrl(route.path, subRoute.path)
            }));
        }

        return ret;
    }, []);
}

console.log('Creating vue-router with configs: ', configs);

export default new BizRouter(configs).create();
