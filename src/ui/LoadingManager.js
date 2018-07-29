/**
 * @file Loading manager
 * @author niminjie
 */

import Vue from 'vue';
import store from '@/store';
import {LOADING_START, LOADING_END} from '@/store/modules/loading';
import {Loading} from 'element-ui';

export class LoadingManager {
    constructor() {
        this.pending = 0;
    }

    show() {
        if (this.pending <= 0) {
            store.dispatch(LOADING_START);
            this.loading = Loading.service({fullscreen: true});
        }

        this.pending++;
    }

    hide() {
        this.pending--;

        if (this.pending > 0) {
            return;
        }

        store.dispatch(LOADING_END);
        if (this.loading) {
            this.loading.close();
        }
    }
}

const manager = new LoadingManager();

/* eslint-disable fecs-export-on-declare */
export default manager;
