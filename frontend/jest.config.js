const jestConfig = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  testMatch: ["**/?(*.)+(spec|test).tsx"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/",
    "\\.svg$"
  ]
};

module.exports = jestConfig;
