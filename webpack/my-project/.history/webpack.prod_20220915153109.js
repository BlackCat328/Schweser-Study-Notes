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
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },

}