/**
 * @file cookie helper(copy from `tangram-1.3.9`)
 * @author erik niminjie
 */

function isValidKey(key) {
    return (new RegExp("^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24")).test(key);
}

export function getRaw(key) {
    if (isValidKey(key)) {
        const reg = new RegExp(`(^| )${key}=([^;]*)(;|\x24)`);
        const result = reg.exec(document.cookie);

        if (result) {
            return result[2] || null;
        }
    }

    return null;
}

export function get(key) {
    let value = getRaw(key);
    if ('string' == typeof value) {
        value = decodeURIComponent(value);
        return value;
    }

    return null;
}

export function getJSON(key) {
    let result = null;
    try {
        result = JSON.parse(get(key));
    }
    catch (ex) {}

    return result;
}
