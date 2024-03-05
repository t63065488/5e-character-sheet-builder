/** @type {import('tailwindcss').Config}*/

import { skeleton } from "@skeletonlabs/tw-plugin";
import { join } from "path";
import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    // 3. Append the path to the Skeleton package
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}",
    ),
  ],
  theme: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/forms"),
    skeleton({
      themes: { preset: [{ name: "crimson", enhancements: true }] },
    }),
  ],
} satisfies Config;

export default config;
