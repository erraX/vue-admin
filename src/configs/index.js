/**
 * @file configs
 * @author niminjie
 */

/**
 * 系统名称
 *
 * @type {string}
 */
export const systemName = 'baiyi';

/**
 * 403跳转链接
 *
 * @type {string}
 */
export const noAuthorityLocation = '/403';

/**
 * 路由配置
 *
 * @type {Array<Object>}
 */
export {default as routes} from './routes';

/**
 * 导航配置
 *
 * @type {Array<Object>}
 */
export {default as navigations} from './navigations';

/**
 * api配置
 *
 * @type {Object}
 */
export {default as api} from './api';
