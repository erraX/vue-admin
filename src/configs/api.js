/**
 * @file api
 * @author niminjie
 */

import {get, post} from '@/utils/decorators/apiDesc';
import Ajax from '@/utils/Ajax';

/**
 * Api
 *
 * @class
 * @extends Ajax
 */
class Api extends Ajax {

    /**
     * 用户信息
     */
    @get({url: '/account'})
    getAccount() {}

    /**
     * 列表信息
     */
    @post({url: '/listPlanData'})
    listPlanData() {}

    @post({url: '/simpleList'})
    simpleList() {}
}

export default new Api();
