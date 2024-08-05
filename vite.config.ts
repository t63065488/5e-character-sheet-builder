import { defineConfig, configDefaults } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteTesting } from "@testing-library/svelte/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), svelteTesting()],
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
    watch: false,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      exclude: ["**/*.{d,config}.{js,ts}", "dist/*", "./src/main.ts"],
    },
    exclude: [...configDefaults.exclude],
    setupFiles: ["vitest-setup.ts"],
  },
});
