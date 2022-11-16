'use strict';

const path = require('path')

module.exports = {
    // 单入口
    // entry: './src/index.js',
    // 多入口
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },

    // 单入口filename写法
    // output: {
    //     path: path.join(__dirname, 'dist'),
    //     filename: 'bundle.js'
    // },
    // 多入口filename写法，用[name]占位符
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'  
    },
    mode: 'production'


    /* 
    *  Loaders:
    *       webpack开箱即用只支持JS和JSON两种文件类型，
    *       通过Loaders去支持其它文件类型并且把它们转化成有效的模块,
    *       并且可以添加到依赖图中。
    * 
    *       本身是一个函数，接受源文件作为参数，返回转换的结果。
    *   写法：
    *       module: {
    *           rules:[
    *               {test:/\.txt$/,use:'raw-loader'}
    *           ]
    *       }
    *    test:指定匹配规则
    *    use:指定使用的loader名称
    */

    /*
    *  Plugins:
    *       插件用于bundle文件的优化，资源管理和环境变量注入
    *       作用于整个构建过程
    *   写法：
    *       plugins: {
    *           new HtmlWebpackPlugin({template:'./src/index.h'})
    *       }
    *    test:指定匹配规则
    *    use:指定使用的loader名称
    */
}