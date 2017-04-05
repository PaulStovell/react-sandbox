var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({});

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

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
      // var mocha = wallaby.testFramework;
      // mocha.ui('tdd');
    },

    testFramework: 'mocha',
    // env: {
    //   type: 'node'
    // }
  };
};
