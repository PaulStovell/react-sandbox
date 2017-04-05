module.exports = function (wallaby) {
  return {
    files: [
      'app/**/*.ts*',
      'app/**/*.less',
      'app/**/*.css',
      '!app/**/*.test.ts*',
      '!app/index.tsx'
    ],

    tests: [
      'app/**/*.test.ts*'
    ],

    setup: function () {
      require('ignore-styles');
    },

    testFramework: 'mocha',
    env: {
      type: 'node'
    }
  };
};
