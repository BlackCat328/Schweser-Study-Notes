const Koa = require("koa"); // 不能使用esmodule，必须使用commonjs规范

const app = new Koa();

app.use((c)=>{

})

app.listen(5173, () => {
    console.log("vite dev server listen on 5173");
})