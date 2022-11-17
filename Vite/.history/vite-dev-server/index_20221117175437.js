const Koa = require("koa"); // 不能使用esmodule，必须使用commonjs规范

const app = new Koa();

// 当请求来临以后会直接进入到use注册的回调函数中
app.use((ctx) => { // context 上下文 request ---> 请求信息 xiang'ying'xin'xi
    console.log("ctx---", ctx.request, ctx.response);
})

app.listen(5173, () => {
    console.log("vite dev server listen on 5173");
})