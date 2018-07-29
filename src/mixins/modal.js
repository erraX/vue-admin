/**
 * @file global methods mixin
 * @author niminjie
 */

export default {

    /**
     * Mixin 一些通用的方法
     *
     * @type {Object}
     */
    methods: {

        /**
         * show toast
         *
         * @param  {string} content toast上展示出来的文本
         * @param  {string} type    toast类型，可以是 success、warn、info、error
         * @return {Promise}
         */
        $showToast(content, type) {
            return Promise.resolve();
        },

        /**
         * show alert
         * only `ok`
         *
         * @param  {string} title   标题
         * @param  {string} content 提示内容
         * @return {Promise}
         */
        $showAlert(title, content) {
            return Promise.resolve();
        },

        /**
         * show confirm
         * `ok` and `cancel`
         *
         * @param  {string} title   标题
         * @param  {string} content 提示内容
         * @return {Promise}
         */
        $showConfirm(title, content) {
            return Promise.resolve();
        },

        /**
         * show prmpt
         *
         * @param  {string} title   标题
         * @param  {string} content 提示内容
         * @return {Promise}
         */
        $showPrompt(title, content) {
            return Promise.resolve();
        }
    }
};
