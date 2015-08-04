module.exports = {
  build_dir: 'build',
  compile_dir: 'release',

  app_files: {
    js: [ 'src/**/*.js' '!src/assets/**/*.js' ],
    coffee: [ 'src/**/*.coffee' ],

    atpl: [ 'src/app/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  test_files: {
    js: [
      'bower/angular-mocks/angular-mocks.js'
    ]
  },

  vendor_files: {
    js: [
      'bower/angular/angular.js',
      'bower/angular-ui-router/release/angular-ui-router.js',
      'bower/angular-ui-utils/modules/route/route.js'
    ],
    css: [
    ],
    assets: [
    ]
  },
};
