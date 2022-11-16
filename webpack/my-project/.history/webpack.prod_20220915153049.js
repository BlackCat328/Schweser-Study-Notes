'use strict';

const path = require('path')
const webpack = require('webpack')

module.exports = {
    // 单入口
    // entry: './src/index.js',
    // 多入口
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },

    /* ------------------------------------------------------------------------------------------------------------------------- */

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

    /* ------------------------------------------------------------------------------------------------------------------------- */

    //Mode用来指定当前的构建环境是:production、development还是none
    //设置mode 可以使用webpack内置的函数，默认值为production
    mode: 'production',

    /* ------------------------------------------------------------------------------------------------------------------------- */

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
    module: {
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif|jpeg)$/,
                use: 'file-loader'
            },
            // {
            //     test:/\.(png|svg|jpg|gif|jpeg)$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 10240
            //             }
            //         }
            //     ]
            // },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },


    /* 
    *   文件指纹：
    *       
    *       Hash: 和整个项目的构建相关，只要项目文件有修改，整个项目构建的 Hash 值就会更改
    *       Chunkhash: 和 webpack 打包的 chunk 有关，不同的 entry 会生成不同的 chunkhash 值
    *       Contenthash: 根据文件内容来定义 hash ，文件内容不变，则 contenthash 不变
    *
    *   JS文件指纹设置：  
    *       设置 output 的 filename,使用[chunkhash]
    *           在 output 中配置 filename: '[name][chunkhash:8].js'
    * 
    *   CSS文件指纹设置：
    *       设置 MiniCssExtractPlugin 的 filename,使用[contenthash]
    *           设置 plugins: [
    *                   new MiniCssExtractPlugin({
    *                       filename: '[name][contenthash:8].css'
    *                   })
    *               ]
    * 
    *   图片的文件指纹设置：
    *       设置 file-loader 的 name,使用[hash]
    *           在 file-loader 配置项中配置 options: { name: 'img/[name][hash:8].[ext]' }
    *               
    * 
    **/
}