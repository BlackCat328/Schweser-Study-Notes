const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', { // 遇见 /api1 前缀的请求，就会触发gai
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: { '^/api1': '' }
        }),
        createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    )
}