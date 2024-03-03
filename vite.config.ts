/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import { resolve } from "path";
import { sveltekit } from "@sveltejs/kit/vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [process.env.NODE_ENV === "test" ? svelte() : sveltekit()],
  test: {
    globals: true,
    environment: "jsdom",
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
