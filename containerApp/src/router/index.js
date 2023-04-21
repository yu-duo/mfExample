import router from 'vue-router'
import vue from 'vue'
import registAsyncRoutes from './asyncRouter'
vue.use(router)
const vueRouter = new router({
    routes:[
        {
            path: '/container/home',
            name: 'home',
            component: () => import('@/views/home.vue')
        }
    ]
})
registAsyncRoutes(vueRouter)
export default vueRouter
