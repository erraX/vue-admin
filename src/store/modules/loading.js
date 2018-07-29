/**
 * @file loading
 * @author niminjie
 */

// Mutations type
export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';

export default {
    state: {

        /**
         * 是否在 `loading` 中
         *
         * @type {boolean}
         */
        isLoading: false
    },

    mutations: {
        [LOADING_START]: state => {
            state.isLoading = true;
        },

        [LOADING_END]: state => {
            state.isLoading = false;
        }
    },

    actions: {
        [LOADING_START]({commit}) {
            commit(LOADING_START);
        },

        [LOADING_END]({commit}) {
            commit(LOADING_END);
        }
    },

    getters: {
        isLoading: state => state.isLoading
    }
};
