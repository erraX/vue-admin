/**
 * @file vuex store
 * @author niminjie
 */

import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import loading from './modules/loading';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        user,
        loading
    }
});
