import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {Defin} from 'unplugin-vue-define-options'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    DefineOptions(),
    vue()
  ]
})
