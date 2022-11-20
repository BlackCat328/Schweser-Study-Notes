import type { Plugin } from "vite";
// @babel/core核心功能：将源代码转为目标代码
import * as babel from '@babel/core';
// Vue给babel写的插件，支持tsx、v-model等
import jsx from '@vue/babel-plugin-jsx';

export default function (): Plugin {
    return {
        name: "vite-plugin-vue-tsx",

        config() {
            return {
                esbuild: {
                    include: /.ts$/
                }
            }
        },

        async transform(code, id) {
            if (/.tsx$/.test(id)) {
                console.log(code, id)
                //@ts-ignore
                const ts = await import('@babel/plugin-transform-typescript').then(r => r.default)
                const res = await babel.transformAsync(code, {
                    ast: true,
                    configFile: false,
                    babelrc: false,
                    plugins: [jsx, [ts, { isTSX: true, allowExtensions: true }]]
                })
            }

            return code
        }
    }
}