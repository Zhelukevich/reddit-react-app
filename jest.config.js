/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  // preset: 'ts-jest/presets/js-whith-ts', // -------- js
  preset: 'ts-jest',
  testEnvironment: 'node',
  // setupFilesAfterEnv: ['<rootDir>setupTests.ts'],/////////////
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],/////////
  moduleNameMapper: { "\\.(css)": "identity-obj-proxy" },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};