const mf  = require("./webpack.mf.js")
module.exports = {
    publicPath:'http://localhost:82/',
    devServer:{
      port:'82',
    },
    configureWebpack: {
        plugins:[
            mf
        ],
        optimization:{
            splitChunks: false
        }
    },
    chainWebpack(config){
        config.devtool('cheap-module-source-map')
    }
}

function getDynamicPublicPath(){
    var scriptUrl = document.currentScript.src
    if(scriptUrl.indexOf('localhost:82')>=0){
        return '/'
    }else{
        return 'auto'
    }
}
