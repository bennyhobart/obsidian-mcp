/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: 'tsconfig.jest.json'
    }]
  },
  testMatch: ['**/__tests__/**/*.test.ts'],
  moduleNameMapper: {
    // Handle module aliases (if you use them)
    '^@/(.*)$': '<rootDir>/$1',
  },
};
