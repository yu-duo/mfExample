export default function registAsyncRoutes(vueRouter){
    let asyncRoutes = null
    vueRouter.beforeEach((to,from,next)=>{
        if(asyncRoutes){
            next()
        }else{
            import("app2/routesApp2").then((res)=>{
                asyncRoutes = res.default
                vueRouter.options.routes = vueRouter.options.routes.concat(asyncRoutes)
                vueRouter.addRoutes(asyncRoutes)
                next({...to,replace:true})
            })
        }
    })
}


