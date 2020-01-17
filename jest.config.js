const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: 'jest-expo',
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.jest.json',
    },
  },
  transform: {
    '^.+\\.(js|jsx)?$': '<rootDir>/node_modules/babel-jest',
    ...tsjPreset.transform,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|sentry-expo|@sentry|native-base|native-base-shoutem-theme|react-dom|unimodules|@unimodules|expo-asset))',
    'local_modules',
  ],
  testPathIgnorePatterns: ['/node_modules', '/local_modules/'],
  coveragePathIgnorePatterns: [
    '/node_modules',
    '/local_modules/',
    '/src/theme/components/',
    '/src/theme/variables/',
    '/__test-data__/',
  ],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
};
