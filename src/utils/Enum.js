/**
 * @file 枚举
 * @author niminjie
 */

/**
 * `obj` 中是否有自身属性 `key`
 *
 * @param {Object} obj obj
 * @param {string} key key
 * @return {boolean}
 */
function has(obj, key) {
    return obj.hasOwnProperty(key);
}

/**
 * Enum
 *
 * @class
 */
export default class Enum {

    /**
     * `Enum` 构造函数
     *
     * @constructor
     * @param {...Object} entities entities
     */
    constructor(...entities) {
        this.valueIdx = [];
        this.aliasIdx = {};

        this.entiites = entities || [];
        this._parseEntities(entities);
    }

    /**
     * 解析 `entities`
     *
     * @param {Array<Object>} entities entities
     */
    _parseEntities(entities = []) {
        entities.forEach(this._parseEntity, this);
    }

    /**
     * 解析 `entity`
     *
     * @param {Object} entity entity
     * @param {Object} entity.alias alias
     * @param {Object} entity.text text
     * @param {Object} entity.value value
     * @param {number} idx idx
     */
    _parseEntity(entity, idx) {
        let {
            alias,
            text,
            value
        } = entity;
        value = (value === undefined || value === null) ? idx : value;

        if (has(this, value)) {
            throw new Error(`Enum already has value: ${value}`);
        }

        if (has(this, alias)) {
            throw new Error(`Enum already has alias: ${alias}`);
        }

        // Assign to `this`
        this[value] = alias;
        this[alias] = value;

        // Add to index
        this.valueIdx[value] = entity;
        this.aliasIdx[alias] = entity;
    }

    /**
     * 根据 `alias` 获取 `text`
     *
     * @param {string} alias alias
     * @return {string}
     */
    getTextFromAlias(alias) {
        return this.aliasIdx[alias] && this.aliasIdx[alias].text;
    }

    /**
     * 根据 `value` 获取 `text`
     *
     * @param {string} value value
     * @return {string}
     */
    getTextFromValue(value) {
        return this.valueIdx[value] && this.valueIdx[value].text;
    }

    /**
     * to value array
     *
     * @return {Array}
     */
    toArray() {
        return this.entities.map(e => e.value);
    }
}
