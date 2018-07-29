/**
 * @file 根据页面判断是否显示组件
 * @author niminjie
 */

import {every, isFunction} from 'lodash';

export default (compare = every, pages = ['404', '403']) => ({
    computed: {
        visible() {
            if (!this.$route) {
                return true;
            }

            return compare(pages, page => {
                if (isFunction(page)) {
                    return page(this.$route);
                }
                return this.$route.name !== page;
            });
        }
    }
});
