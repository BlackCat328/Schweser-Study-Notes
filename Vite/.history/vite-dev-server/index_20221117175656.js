const Koa = require("koa"); // 不能使用esmodule，必须使用commonjs规范
const fs = require("fs");

// 不同的宿主huan'jing

const app = new Koa();

// node最频繁做的事情就是在处理请求和操作文件

// 当请求来临以后会直接进入到use注册的回调函数中
app.use((ctx) => { // context 上下文，request ---> 请求信息 响应信息
    console.log("ctx---", ctx.request, ctx.response);
})

app.listen(5173, () => {
    console.log("vite dev server listen on 5173");
})