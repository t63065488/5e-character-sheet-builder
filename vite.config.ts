/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

export default defineConfig({
  plugins: [svelte()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["tests/setupTests.ts"],
    include: ["./tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    coverage: {
      thresholds: {
        lines: 80,
      },
      exclude: [
        ...(configDefaults.coverage.exclude ?? ""),
        "*.config.{js,ts,cjs}",
      ],
      all: false,
    },
    alias: [{ find: "$lib", replacement: resolve(__dirname, "./src/lib") }],
  },
});
