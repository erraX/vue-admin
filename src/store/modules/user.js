/**
 * @file user state
 * @author niminjie
 */

// Mutations type
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_AUTH = 'SET_AUTH';

export default {

    state: {

        /**
         * 用户信息
         *
         * @type {Object}
         */
        info: {
            username: 'user'
        },

        auth: {}
    },

    mutations: {
        [SET_USER_INFO]: (state, info) => {
            state.info = info;
        },

        [SET_AUTH]: (state, auth) => {
            state.auth = auth;
        }
    },

    actions: {
        [SET_USER_INFO]({commit}, info) {
            commit(SET_USER_INFO, info);
        },

        [SET_AUTH]({commit}, auth) {
            commit(SET_AUTH, auth);
        }
    },

    getters: {
        userInfo: state => state.info,
        auth: state => state.auth
    },
};
