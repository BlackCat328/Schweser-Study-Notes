import { defineConfig, loadEnv } from "vite";
import viteBaseConfig from "./vite.base.config";
import viteProdConfig from "./vite.prod.config";
import viteDevConfig from "./vite.dev.config";

//策略模式
const envResolver = {
    "build": () => {
        console.log("生产环境");
        return ({ ...viteBaseConfig, ...viteProdConfig })
    },
    "serve": () => {
        console.log("开发环境");
        // 新配置里是可能会被配置envDir
        return ({ ...viteBaseConfig, ...viteDevConfig })
    }
}

export default defineConfig(({ command, mode }) => {

    // if (command === "build") {
    //     //代表生产环境的配置
    // } else {
    //     //代表开发环境的配置
    // }
    console.log("process", process.env);
    console.log("process", process.cwd());
    // 当前env文件所在的目录
    // 第二个参数不是必须是process.cwd()
    const env = loadEnv(mode, process.cwd(), "")
    // const env = loadEnv(mode, "/code/笔记/Vite/test-vite", "")
    return envResolver[command]();
})
