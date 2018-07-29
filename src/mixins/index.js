/**
 * @file mixins
 * @author niminjie
 */

import * as mixins from './global';

export default {
    install(Vue) {
        Object
            .keys(mixins)
            .forEach(name => Vue.mixin(mixins[name]));
    }
}
