module.exports = {
    publicPath:'http://localhost:81/',
    devServer:{
      port:'81',
    },
    configureWebpack:{
        plugins:[
            require("./webpack.mf.js")
        ],
        optimization:{
            splitChunks: false
        }
    },
    chainWebpack(config){
        config.devtool('cheap-module-source-map')
    }
}
