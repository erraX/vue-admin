import {at} from 'lodash';
import {userKeyMapping} from '@/configs';

/**
 * User class
 *
 * @class
 */
class User {

    /**
     * User info data paths in `userKeyMapping`
     *
     * @type string
     */
    infoPaths = ''

    /**
     * Check `infoPaths` whether is overrode
     *
     * @throws {Error}
     */
    _checkInfoPaths() {
        if (!this.infoPaths) {
            throw new Error('`infoPaths` should be overrode');
        }
    }

    /**
     * Get info
     *
     * @return {Object}
     */
    get info() {
        this._checkInfoPaths();
        return at(userKeyMapping, this.infoPaths)[0] || {};
    }

    /**
     * Get name
     *
     * @return {string}
     */
    get name() {
        return this.info.name;
    }

    /**
     * Get userid
     *
     * @return {string}
     */
    get userid() {
        return this.info.userid;
    }

    /**
     * Get authority
     *
     * @return {string}
     */
    get authority() {
        return this.info.authority;
    }
}

/**
 * AppUser
 *
 * @extends User
 */
class AppUser extends User {
    infoPaths = 'app.user'
}

/**
 * AppAdmin
 *
 * @extends User
 */
class AppAdmin extends User {
    infoPaths = 'app.admin'
}

/**
 * MuUser
 *
 * @extends User
 */
class MuUser extends User {
    infoPaths = 'mu.user'
}

/**
 * MuAdmin
 *
 * @extends User
 */
class MuAdmin extends User {
    infoPaths = 'mu.admin'
}

export const APP_USER = Symbol('APP_USER');
export const APP_ADMIN = Symbol('APP_ADMIN');
export const MU_USER = Symbol('APP_USER');
export const MU_ADMIN = Symbol('MU_ADMIN');

const factoryMapping = {
    [APP_USER]: AppUser,
    [APP_ADMIN]: AppAdmin,
    [MU_USER]: MuUser,
    [MU_ADMIN]: MuAdmin
};

export default type => new factoryMapping[type]();
