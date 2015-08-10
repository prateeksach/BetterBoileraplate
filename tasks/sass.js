module.exports = function (gulp, config, $, isProd, browserSync) {
    gulp.task('sass', function() {
        return gulp.src(config.files.sass)
            .pipe($.sass({outputStyle: 'compressed'}).on('error', $.util.log))
            .pipe(gulp.dest(config.dirs.css))
            .pipe(browserSync.stream());
    });
};