module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/e2eTests/**',
    '!**/__tests__/**',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](build|dist|docs|public|node_modules|.cache)[/\\\\]',
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/?!(unified)'],
}
