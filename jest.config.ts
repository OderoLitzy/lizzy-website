import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "<rootDir>/jest.environment.ts",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^msw/node$": "<rootDir>/node_modules/msw/lib/node/index.js",
    "^msw$": "<rootDir>/node_modules/msw/lib/core/index.js",
  },
  collectCoverageFrom: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "lib/**/*.{ts,tsx}",
    "!**/*.d.ts",
  ],
  // Exclude editorial tests (they use jest.ui.config.ts without MSW)
  testPathIgnorePatterns: [
    "/node_modules/",
    "/__tests__/components/editorial/",
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!(msw|@mswjs|@open-draft/deferred-promise|rettime|until-async)/)",
  ],
};

export default createJestConfig(config);
