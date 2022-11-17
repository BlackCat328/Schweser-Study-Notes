import { defineConfig } from "vite";
export default defineConfig({
    optimizeDeps: {
        exclude: []
    },
    envPrefix: "WSGG_"
})