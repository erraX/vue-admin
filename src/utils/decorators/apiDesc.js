/**
 * @file apiDesc decorator
 * @author niminjie
 */

/**
 * Api Decorator
 *
 * @param {string} method ajax method
 * @return {Function}
 */
export const makeApi = method => configs => (target, key, descriptor) => {
    const {url, options} = configs;

    let definedFn = descriptor.value;

    if (typeof definedFn !== 'function') {
        throw new Error(`@${method} decorator can only be applied to methods not: ${typeof definedFn}`);
    }

    // 实际请求的函数
    let fn = function (data, specOptions) {
        return this[method](url, data, {
            ...options,
            specOptions
        });
    };

    let boundFn = null;

    return {
        configurable: true,

        get() {
            if (!boundFn) {
                boundFn = fn.bind(this);
            }

            // 调用 getter 的时候，返回绑定 `this` 的函数
            return boundFn;
        },

        set(value) {
            fn = value;
            boundFn = null;
        }
    };
};

export const get = makeApi('get');
export const post = makeApi('post');
