import { defineConfig } from "vite";
import viteBaseConfig from "./vite.base.config";
import v

export default defineConfig(({ command }) => {
    if (command === "build") {
        //代表生产环境的配置
    } else {
        //代表开发环境的配置
    }
})
