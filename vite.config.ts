/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
  plugins: [sveltekit()],
  test: {
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
  },
});
