const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //开启代理服务器（方式一）
  /*devServer: {
    proxy: 'http://localhost:5000'
  }*/
  //开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/stu': {//匹配以'/stu'开头的请求路径
        target: 'http://localhost:5000',//代理目标的基础路径
        pathRewrite:{'^/stu':''},
        ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host值
      },
      '/car': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/car':''},
        ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
})
