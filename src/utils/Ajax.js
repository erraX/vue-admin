/**
 * @file ajax
 * @author niminjie
 */

import {indexOf, at} from 'lodash';
import axios from 'axios';
import {Message} from 'element-ui';
import loading from '@/ui/LoadingManager';

/**
 * 判断是否是失败的http code
 *
 * @param {string | number} code http code
 * @return {boolean}
 */
function isErrorCode(code) {
    code = parseInt(code, 10);
    return code > 0
        && code < 200
        || (code >= 300 && code !== 304);
}

/**
 * loading 适配器
 *
 * @type {Object}
 * @interface Loading
 */
const loadingAdapter = {
    show() {
        loading.show();
    },

    hide() {
        loading.hide();
    }
};

/**
 * toast 适配器
 *
 * @type {Object}
 * @interface Toast
 */
const toastAdapter = {
    success(msg) {
        Message.success({message: msg});
    },

    error(msg) {
        Message.error({message: msg});
    }
};

/**
 * Api base class
 *
 * @class
 */
export default class Api {

    /**
     * constructor
     *
     * @constructor
     * @param {Object} params  params
     * @param {Object} loading loading
     * @param {Object} toast   toast
     * @param {string} prefix  ajax url prefix
     */
    constructor({
        loading = loadingAdapter,
        toast = toastAdapter,
        prefix = '/user'
    } = {}) {
        this.loading = loading;
        this.toast = toast;
        this.showLoading = true;

        this.axios = axios.create({
            baseURL: prefix,
            timeout: 5000
        });
    }

    /**
     * ajax 成功回调
     *
     * @param {Object} params params
     * @param {Object} params.data data
     * @return {any}
     * @throws {Error}
     */
    succeedHandler({
        data = {}
    }) {
        const {
            body,
            model,
            success,
            message
        } = data;

        // 没有 `body` 就返回 `model`
        if (success) {
            return body || model;
        }

        // 相当于 reject 一个对象
        throw ({
            code: 500,
            message: message || '返回数据失败'
        });
    }

    /**
     * ajax 失败回调
     *
     * @param {Object} error error
     * @throws {Error}
     */
    failedHandler(error) {
        let errorObj = {};
        const [statusCode, statusText] = at(
            error,
            'request.status',
            'request.statusText'
        );

        // ajax 请求错误
        if (isErrorCode(statusCode)) {
            errorObj.code = statusCode;
            errorObj.message = statusText;
        } else {
            errorObj.message = error.message || '请求失败，请稍候再试！';
            errorObj.code = error.code || 400;
        }

        // 没有权限
        // ...
        if (error.code === 403) {
            location.href = '#/admin/login';
        }

        // Show error message
        this.toast.error(errorObj.message);

        throw errorObj;
    }

    /**
     * All `axios` methods:
     *
     *  axios.request(config)
     *  axios.get(url[, config])
     *  axios.delete(url[, config])
     *  axios.head(url[, config])
     *  axios.options(url[, config])
     *  axios.post(url[, data[, config]])
     *  axios.put(url[, data[, config]])
     *  axios.patch(url[, data[, config]])
     *
     * @param  {string} method 请求方法
     * @param  {string} url    请求地址
     * @param  {Object} data   请求参数
     * @param  {Object} config 请求配置
     * @return {Promise}
     */
    async fetch(method, url, data, config) {

        // 这几个方法都没有 `data`
        if (indexOf([
            'get',
            'delete',
            'header',
            'options'
        ], method) > -1) {
            config = data;
        }

        const showLoading = config.showLoading !== undefined
            ? config.showLoading
            : this.showLoading;

        if (showLoading) {
            this.loading.show();
        }

        let response;
        try {
            response = await this.axios[method](url, data, config);
            this.loading.hide();
            return this.succeedHandler(response);
        } catch (ex) {
            this.loading.hide();
            this.failedHandler(ex);
        }
    }

    /**
     * Post 请求
     *
     * @param  {string} url    请求地址
     * @param  {Object} data   请求参数
     * @param  {Object} config 请求配置
     * @return {Promise}
     */
    async post(url, data = {}, config = {}) {
        return await this.fetch('post', url, data, config);
    }

    /**
     * Get 请求
     *
     * @param  {string} url    请求地址
     * @param  {Object} data   请求参数
     * @param  {Object} config 请求配置
     * @return {Promise}
     */
    async get(url, data = {}, config = {}) {

        // 填充 `data` 至 `config.params`
        config = {
            ...config,
            params: {
                ...data
            }
        };

        return await this.fetch('get', url, config);
    }
}
