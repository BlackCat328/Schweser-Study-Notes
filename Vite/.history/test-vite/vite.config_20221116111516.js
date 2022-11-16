import { defineConfig } from "vite";
import viteBaseConfig from "./vite.base.config";
import viteProdConfig from "./vite.prod.config";
import viteDevConfig from "./vite.dev.config";



export default defineConfig(({ command }) => {
    if (command === "build") {
        //代表生产环境的配置
    } else {
        //代表开发环境的配置
    }
})
