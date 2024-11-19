module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  collectCoverage: true, // Enable code coverage collection
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", // Include all files in the src directory
    "!src/**/*.d.ts", // Exclude TypeScript declaration files
    "!src/**/index.{js,ts}", // Exclude index files (optional)
  ],
  coverageDirectory: "coverage", // Directory where coverage reports will be stored
  coverageReporters: ["text", "lcov"], // Output formats: text and HTML

  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy', // Mock CSS imports
  },
};
