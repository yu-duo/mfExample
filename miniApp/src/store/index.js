import Vuex from 'vuex'
import Vue from 'vue'
import asyncStore from './exposedStore'
Vue.use(Vuex)
 const store = new Vuex.Store({
    modules:{}
})
store.registerModule('userModule',asyncStore)
export default store
