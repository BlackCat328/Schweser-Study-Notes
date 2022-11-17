const Koa = require("koa"); // 不能使用esmodule，必须使用commonjs规范

const app = new Koa();

// 当请求来临以后会直接进入到use注册的回调函数zhong
app.use((ctx) => {
    console.log("ctx---", ctx.request, ctx.response);
})

app.listen(5173, () => {
    console.log("vite dev server listen on 5173");
})