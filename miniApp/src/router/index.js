import router from 'vue-router'
import vue from 'vue'
import syncRoutes from "./exposedRoutes";

vue.use(router)
const vueRouter = new router({
    routes:[
        ...syncRoutes
    ]
})
export default vueRouter
