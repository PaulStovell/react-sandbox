module.exports = function (wallaby) {
  return {
    files: [
      'app/**/*.ts*',
      'app/**/*.less',
      'app/**/*.css',
      '!app/**/*.spec.ts*',
      '!app/index.tsx'
    ],

    tests: [
      'app/**/*.spec.ts*'
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
