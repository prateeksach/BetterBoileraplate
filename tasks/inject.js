var mainBowerFiles = require('main-bower-files');

module.exports  = function (gulp, config, $, isProd) {
    gulp.task('inject', ['templatecache', 'sass'], function () {
        var bowerFiles, appFiles, appCssFiles, dest;
        var env = isProd ? config.env.prod : config.env.dev;

        bowerFiles    = gulp.src(mainBowerFiles({env: env, paths: {
            bowerDirectory: config.bower.directory,
            bowerrc: config.bower.bowerrc,
            bowerJson: config.bower.bowerJson
        }}), {base: config.dirs.bower, read: false});
        appFiles      = gulp.src(config.files.js).pipe($.angularFilesort());
        appCssFiles   = gulp.src(config.dirs.css + config.files.css);
        dest          = config.dirs.src;

        return gulp.src(config.files.index)
            .pipe($.inject(bowerFiles, {relative: true, name: 'bower'}))
            .pipe($.inject(appFiles, {relative: true, name: 'app'}))
            .pipe($.inject(appCssFiles, {relative: true, name: 'app'}))
            .pipe($.rename({basename: 'index'}))
            .pipe(gulp.dest(dest));
    });
};