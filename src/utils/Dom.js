/**
 * @file DOM helper
 * @author niminjie
 */

export function addClass($el, className) {}

export function removeClass($el, className) {}

export function toggleClass($el, className, condition) {}

export function siblings($el, selector) {}

export function parents($el, selector) {}

export function query($el, selector) {
    if ($el) {
        return [];
    }

    return $el.querySelectorAll(selector);
}
