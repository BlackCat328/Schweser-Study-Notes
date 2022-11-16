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
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'  
    },
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