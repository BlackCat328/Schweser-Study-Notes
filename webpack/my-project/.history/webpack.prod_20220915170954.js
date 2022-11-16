'use strict';

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'  
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
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),

        new CssMinimizerPlugin({
            test: /\.css$/g,
        }),
        
        new HtmlWebpackPlugin({
                               template: path.join(__dirname, 'src/search.html'),
                               filename: 'search.html',
                               chunks: ['search'],
                               inject: true,
                               minify: {
                                   html5: true,
                                   collapseWhitespace: true,
            *                       preseveLineBreaks: false,
            *                       minifyCSS: true,
            *                       minifyJS: true,
            *                       removeComments: false   
            *                   }
            *               })
        })
    ]
}