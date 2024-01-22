import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./.svelte-kit/tsconfig.json";

const config: Config = {
  verbose: true,
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true,
      },
    ],
    "^.+\\.[tj]sx?$": [
      "ts-jest",
      {
        useESM: true,
        // optional: seperate tsconfig for tests
        //"tsconfig": "tsconfig.spec.json",
      },
    ],
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  extensionsToTreatAsEsm: [".svelte", ".ts"],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/5e-character-sheet-builder",
    }),
  },
  testEnvironment: "jsdom",
  collectCoverage: true,
};

export default config;
