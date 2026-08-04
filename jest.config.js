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
};
