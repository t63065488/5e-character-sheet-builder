import { defineConfig } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: [
      {
        find: "@lib",
        replacement: path.resolve("./src/lib"),
      },
      {
        find: "@assets",
        replacement: path.resolve("./src/assets"),
      },
    ],
  },
  test: {
    globals: true,
  },
});
