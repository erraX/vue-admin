/**
 * @file selfChian to return self
 * @author niminjie
 */

export default function selfChain(target, key, descriptor) {
    const old = descriptor.value;

    descriptor.value = function (...args) {
        old.call(this, ...args);
        return this;
    };

    return descriptor;
}
