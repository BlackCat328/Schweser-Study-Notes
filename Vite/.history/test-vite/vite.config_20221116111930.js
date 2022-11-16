import { defineConfig } from "vite";
import viteBaseConfig from "./vite.base.config";
import viteProdConfig from "./vite.prod.config";
import viteDevConfig from "./vite.dev.config";

//策略模式
const envResolver = {
    "build": () => {
        console.log("生产环境");
    },
    "serve": () => Object.assign({}, viteBaseConfig, viteDevConfig)
}

export default defineConfig(({ command }) => {

    // if (command === "build") {
    //     //代表生产环境的配置
    // } else {
    //     //代表开发环境的配置
    // }

    return envResolver[command]();
})
