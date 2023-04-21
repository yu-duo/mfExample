export  default  function registAsyncStore(store){
    import("app2/storesApp2").then((res)=>{
        let asyncStore  = res.default
        store.registerModule('userModule',asyncStore)
    })
}


