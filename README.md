# mfExample
webpack5联邦模块与vue-cli3结合的示例。包括状态共享、路由共享
# vue.config.js配置注意点
publicPath最好配为微前端的http地址，例如:http://XXXX:81/admin。不要配置为"./"或“/”，会导致远程模块因加载地址错误而无法加载。
splitChunks:false.代码分割会导致远程入口模块加载错误。
