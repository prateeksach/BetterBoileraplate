

module.exports = function (gulp, config, $, isProd) {

    gulp.task('templatecache', function() {

        return gulp.src(config.files.templates)
            .pipe($.if(isProd, $.minifyHtml({empty: true})))
            .pipe($.angularTemplatecache(
                config.templateCache.file,
                config.templateCache.options
            ))
            .pipe(gulp.dest(config.templateCache.dest));
    });
};
