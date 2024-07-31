import { defineConfig } from "vite";
import macrosPlugin from "vite-plugin-babel-macros";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["./public/images/*"],
  base: '/tapshelf/', 
  plugins: [react(), macrosPlugin()],
  build: {
    outDir: "dist", // Output directory
    sourcemap: true, // Enable source maps
  },
});
