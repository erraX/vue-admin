/**
 * @file main
 * @author niminjie
 */

import Vue from 'vue';
import chain from './utils/decorators/selfChain';
import extendVue from './utils/extendVue';
import store from './store';
import router from './router';
import App from './views/App';
import ElementUI from 'element-ui';
import filters from './filters';
import mixins from './mixins';
import directives from './directives';

import 'element-theme-chalk';

/**
 * Application
 *
 * @class
 */
class Application {
    constructor() {
        this.app = null;
        this.extendVueI = extendVue(Vue);

        this.install()
            .config()
            .start();
    }

    @chain
    install() {
        Vue.use(ElementUI);
        Vue.use(filters);
        Vue.use(mixins);
        Vue.use(directives);
    }

    @chain
    config() {
        Vue.config.productionTip = false;
    }

    @chain
    start() {
        this.app = new Vue({
            el: '#app',
            router,
            store,
            template: '<App />',
            components: {App}
        });
    }
}

export default new Application();
