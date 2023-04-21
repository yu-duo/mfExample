const {ModuleFederationPlugin} = require("webpack").container


module.exports=  new ModuleFederationPlugin({
    name:'container',
    filename:'remoteEntry.js',
    remotes:{
        app2:"app2@http://localhost:81/remoteEntry.js"
    }
})
