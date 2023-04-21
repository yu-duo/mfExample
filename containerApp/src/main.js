// require('./vue.js')
// import vue from './vue.js'
import App from "./App.vue";
import vue from 'vue'
import vueRouter from './router/index'
import store from './store/index'
import './router/asyncRouter'
new vue({
    render:(h)=>h(App),
    el:"#app",
    router:vueRouter,
    store
})
