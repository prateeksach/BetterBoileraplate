

module.exports = function (gulp, config, $, isProd, browserSync) {

    gulp.task('less', function() {

        return gulp.src(config.files.less)
            .pipe($.less().on('error', $.util.log))
            .pipe($.autoprefixer('last 10 versions', 'ie 9'))
            .pipe(gulp.dest(config.dirs.css))
            .pipe(browserSync.stream());
    });
};
