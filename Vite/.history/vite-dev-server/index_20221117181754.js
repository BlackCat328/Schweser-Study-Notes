const Koa = require("koa"); // 不能使用esmodule，必须使用commonjs规范
const fs = require("fs");
const path = require("path");
// fs 并没有通过 npm i 或者 yarn add，是从哪里来的呢？
// 不同的宿主环境会给予js赋予一些不同的能力
// 如 document.getElementById(id名) --> 浏览器注入给 JS 的特殊能力
// 所以 fs,path... 就是 node 环境给与 JS 的特殊能力...

const app = new Koa();

// node最频繁做的事情就是在处理请求和操作文件

// 当请求来临以后会直接进入到use注册的回调函数中
app.use(async (ctx) => { // context 上下文，request ---> 请求信息 响应信息
    console.log("ctx-->", ctx.request, ctx.response);
    if (ctx.request.url === "/") {
        // 这意味着其他人在找服务器要根路径的东西
        // path.resolve(__dirname, "./index.html") --> 绝对路径
        const indexContent = await fs.promises.readFile(path.resolve(__dirname, "./index.html")); // 在服务端一般不这么用
        console.log("indexContent-->", indexContent.toString());
        // 将 indexContent 作为响应体发给客户端
        ctx.response.body = indexContent;
        // 响应体填充好了，那你要以什么形式发给他呢？
        // json --> application/json text/html text/javascript
        ctx.response.set("Content-Type", "text/html");
    }
    // 比如后台给我们一个获取用户信息的接口 api/getUserInfo post
    if (ctx.request.url === "/api/getUserInfo") {
        // 去数据库找到用户信息然后返回给前端
    }
    //
    if (ctx.request.url === "/main.js") {

        const mainContent = await fs.promises.readFile(path.resolve(__dirname, "."));
        ctx.response.body = indexContent;
        ctx.response.set("Content-Type", "text/html");
    }
})

app.listen(5173, () => {
    console.log("vite dev server listen on 5173");
})