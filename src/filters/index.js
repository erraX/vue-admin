/**
 * @file filters
 * @author niminjie
 */

import * as filters from './global';

export default {
    install(Vue) {
        Object
            .keys(filters)
            .forEach(name => Vue.filter(name, filters[name]));
    }
}
