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
    // 多入口
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'  
    },
    mode: 'production'
}