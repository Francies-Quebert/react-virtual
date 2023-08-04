export default module.exports = {
    roots: ['<rootDir>/src'],
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec|test).+(ts|tsx)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":  '<rootDir>/__mocks__/fileMock.ts',
    },
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };