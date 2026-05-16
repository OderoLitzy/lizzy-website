import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "<rootDir>/jest.environment.ts",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    // Force the CJS build of MSW in Jest (the .mjs builds are ESM-only and
    // cannot be consumed by jest-runtime without experimental VM modules).
    "^msw/node$": "<rootDir>/node_modules/msw/lib/node/index.js",
    "^msw$": "<rootDir>/node_modules/msw/lib/core/index.js",
  },
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "lib/**/*.{ts,tsx}",
    "!**/*.d.ts",
  ],
  // Allow MSW and its interceptors (published as ESM) to be transformed by SWC.
  // next/jest already excludes node_modules; we re-open msw and @mswjs/* here.
  transformIgnorePatterns: [
    "/node_modules/(?!(msw|@mswjs)/)",
  ],
};

export default createJestConfig(config);
