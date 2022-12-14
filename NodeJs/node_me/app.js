const express = require('express')
const app = express()
const joi = require('joi')

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({extended: false}))

// 响应数据的中间件
app.use(function (req, res, next) {
    // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
    res.cc = function (err, status = 1) {
        res.send({
            // 状态
            status,
            // 状态描述，判断 err 是 错误对象 还是 字符串
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

const userRouter = require('./router/user')
app.use('/api',userRouter)

// 错误中间件
app.use(function (err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
    // 未知错误
    res.cc(err)
})

app.listen(8888, () => {
    console.log('app server running at http://localhost:8888')
})