module.exports = {
  rootDir: '../../',
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  preset: 'ts-jest',
  restoreMocks: true,
  setupFilesAfterEnv: ['<rootDir>/config/test/setup-after.ts'],
};
