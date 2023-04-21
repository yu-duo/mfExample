const {ModuleFederationPlugin} = require("webpack").container

module.exports= new ModuleFederationPlugin({
    name:'app2',
    filename:'remoteEntry.js',
    exposes:{
        './routesApp2':"./src/router/exposedRoutes.js",
        './storesApp2':'./src/store/exposedStore.js'
    }
})
