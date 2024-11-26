module.exports = {
    collectCoverage: true,
    // coverageDirectory: 'coverage/backend',
    // coverageProvider: 'babel',
    // coverageReporters: ['json', 'text', 'lcov'],
    moduleNameMapper: {
        '^@root(.*)$': '<rootDir>$1',
    },
    rootDir: '.',
    transform: {
        '^.+\\.(tsx?)$': '@swc/jest',
    },
    transformIgnorePatterns: [],
    testPathIgnorePatterns: [],
    testMatch: ['<rootDir>/test/**/*.test.(ts|tsx)'],
    // setupFilesAfterEnv: ['<rootDir>/test/setupAfterEnv.ts'],
    // resolver: '<rootDir>/test/customResolver.js',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.(ts|tsx)',
        '<rootDir>/src/**/*.js',
    ],
    verbose: true,
    workerIdleMemoryLimit: '512M',
    /* @Ashniu123 TEMP: Till we upgrade to jest 30
       Issue: https://github.com/jestjs/jest/issues/14305
     */
    prettierPath: '<rootDir>/node_modules/prettier2/index.js',
};
