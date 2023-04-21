import Vuex from 'vuex'
import Vue from 'vue'
import registAsyncStore from './asyncStore'
Vue.use(Vuex)
 const store = new Vuex.Store({
    modules:{}
})
registAsyncStore(store)
export default store
