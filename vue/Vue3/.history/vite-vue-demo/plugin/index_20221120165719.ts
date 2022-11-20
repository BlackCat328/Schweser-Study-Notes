import type { Plugin } from "vite";
// @babel/core核心功能：将源代码转为目标代码
import * as babel from '@babel/core';
// Vue给babel写的插件，支持tsx、v-model等
import jsx from '@vue/babel-plugin-jsx';

export default function (): Plugin {
    return {
        name: "vite-plugin-vue-tsx",

        transform(code, id) {
            console.log(code, id)
            if
        }
    }
}