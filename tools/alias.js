// centralize alias list, so only 2 file need update when adding alias
// this file and jsconfig.json

// eslintrc & babel
const alias = {
  '~': './',
  '@elements': './components/elements',
  '@fragments': './components/fragments',
  '@layouts': './components/layouts',
  '@filters': './components/filters',
  '@poolData': './components/poolData',
  '@forms': './components/forms',
  '@tables': './components/tables',
  '@list': './components/list',
  '@inputs': './components/inputs',
};

// jest
const jestAlias = {
  '^~(.*)$': '<rootDir>$1',
  '^@elements(.*)$': '<rootDir>/components/elements$1',
  '^@fragments(.*)$': '<rootDir>/components/fragments$1',
  '^@layouts(.*)$': '<rootDir>/components/layouts$1',
  '^@filters(.*)$': '<rootDir>/components/filters$1',
  '^@poolData(.*)$': '<rootDir>/components/poolData$1',
  '^@forms(.*)$': '<rootDir>/components/forms$1',
  '^@tables(.*)$': '<rootDir>/components/tables$1',
  '^@list(.*)$': '<rootDir>/components/list$1',
  '^@inputs(.*)$': '<rootDir>/components/inputs$1',
};

module.exports = {alias, jestAlias};
