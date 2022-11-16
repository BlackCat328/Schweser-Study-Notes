const { createProxyMiddleware } = require('http')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', {
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: { '^/api1': '' }
        })
    )
}