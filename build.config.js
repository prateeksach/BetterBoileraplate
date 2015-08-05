module.exports = {
  build_dir: 'build',
  compile_dir: 'release',

  app_files: {
    js: [ 'src/js/**/*.js' ],

    atpl: [ 'src/templates/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  vendor_files: {
    js: [
      'bower/angular/angular.js',
      'bower/angular-ui-router/release/angular-ui-router.js',
      'bower/angular-animate/angular-animate.js',
      'src/assets/libs/parse-1.5.0.min.js'
    ],
    css: [
    ],
    assets: [
    ]
  },
};
