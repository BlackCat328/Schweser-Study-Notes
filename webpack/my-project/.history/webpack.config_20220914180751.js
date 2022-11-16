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

    //Mode用来指定当前的构建环境是:production、development还是none
    //设置mode 可以使用webpack内置的函数，默认值为production
    mode: 'production',

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
            // {
            //     test:/\.(png|svg|jpg|gif|jpeg)$/,
            //     use: 'file-loader'
            // },
            {
                test:/\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240
                        }
                    }
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },

    /*
    *  Plugins:
    *       插件用于bundle文件的优化，资源管理和环境变量注入
    *       作用于整个构建过程
    *   写法：
    *       plugins: {
    *           new HtmlWebpackPlugin({template:'./src/index.html'})
    *       }
    *   多个插件就放进plugins数组里
    */
    

    /*
    *  webpack中文件监听:
    *       文件监听是在发现源码发生变化时，自动重新构建出新的输出文件
    *  
    *  webpack中开启监听模式,两种方式：
    * 
    *       1.启动webpack命令时，带上--watch参数  (注：有个唯一缺陷，需要每次手动刷新浏览器)
    *           在package.json中的scripts里面配置"watch": "webpack --watch"
    *           命令行直接运行 npm run watch 就可以开启监听文件
    * 
    *       2.在配置webpack.config.js中设置watch: true
    * 
    *  文件监听的原理分析:
    *       轮询判断文件的最后编辑时间是否变化
    *       某个文件发生了变化，并不会立刻告诉监听者，而是先缓存起来，等 aggregateTimeout
    * 
    *           module.export={
    *               //默认是false
    *               watch: true,
    *               //
    *               watchOptions: {
    *                   ig
    *               }
    *           }
    *    
    */
    
   
}