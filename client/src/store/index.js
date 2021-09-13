import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { AdsModule } from './modules/AdsModule';

export default new Vuex.Store({
    modules: { AdsModule }
})