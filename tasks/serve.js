


module.exports = function (gulp, config, $, isProd, browserSync) {

    gulp.task('serve', ['templatecache', 'inject', 'less'], function () {
        browserSync.init({
            server: {
                baseDir: config.dirs.src
            },
            port: config.server.port,
            host: config.server.host,
            index: config.server.index
        });
    });


};
