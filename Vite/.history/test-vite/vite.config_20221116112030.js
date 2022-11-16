import { defineConfig } from "vite";
import viteBaseConfig from "./vite.base.config";
import viteProdConfig from "./vite.prod.config";
import viteDevConfig from "./vite.dev.config";

//策略模式
const envResolver = {
    "build": () => {
        console.log("生产环境");
        return { ...viteBaseConfig, ...viteProdConfig }
    },
    "serve": () => {
        console.log("开发环境");
        return { ...viteBaseConfig, ...viteDevConfig }
    }
}

export default defineConfig(({ command }) => {

    // if (command === "build") {
    //     //代表生产环境的配置
    // } else {
    //     //代表开发环境的配置
    // }
    console.log("command");
    return envResolver[command]();
})
