var mainBowerFiles = require('main-bower-files');

module.exports = function (gulp, config, $, isProd) {
    var env = isProd ? config.env.prod : config.env.dev;

    // put all vendor files into 1 files
    gulp.task('dist:vendor', function () {
        return gulp.src(mainBowerFiles({env: env, paths: {
                bowerDirectory: config.bower.directory,
                bowerrc: config.bower.bowerrc,
                bowerJson: config.bower.bowerJson
            }}), {base: config.dirs.bower, read: true})
            .pipe($.concat(config.dist.files.vendor))
            .pipe(gulp.dest(config.dist.dirs.js));
    });

    // put all javascript into 1 file
    gulp.task('dist:js', ['templatecache'], function () {
        return gulp.src(config.files.js)
            .pipe($.angularFilesort())
            .pipe($.concat(config.dist.files.js))
            .pipe($.ngAnnotate())
            .pipe($.uglify())
            .pipe(gulp.dest(config.dist.dirs.js));
    });

    // move assets to build folder
    gulp.task('dist:assets', function () {
        return gulp.src(config.files.assets)
            .pipe(gulp.dest(config.dist.dirs.assets));
    });

    // conbines all less files as well as bower css files
    gulp.task('dist:less', function() {

        return gulp.src([config.files.less])
            .pipe($.less().on('error', $.util.log))
            .pipe($.autoprefixer('last 10 versions', 'ie 9'))

            .pipe($.concat('main.css'))
            .pipe($.minifyCss({keepBreaks: false}))

            .pipe(gulp.dest(config.dist.dirs.css));
    });

    // move index.html into the build folder so we can get correct relative pathes
    gulp.task('dist:index', function () {
        return gulp.src(config.files.index)
            .pipe($.rename({basename: 'index'}))
            .pipe(gulp.dest(config.dist.dirs.root));
    });

    // injects files into index.html
    gulp.task('dist:inject', ['dist:less', 'dist:vendor', 'dist:js', 'dist:index'], function () {
        var bowerFile, appFile, appCssFile;
        var env = isProd ? config.env.prod : config.env.dev;

        bowerFile    = gulp.src(config.dist.dirs.js + config.dist.files.vendor, {read: false});
        appFile      = gulp.src(config.dist.dirs.js + config.dist.files.js, {read: false});
        appCssFile   = gulp.src(config.dist.dirs.css + config.dist.files.css, {read: false});

        return gulp.src(config.dist.files.index)
            .pipe($.inject(bowerFile, {relative: true, name: 'bower'}))
            .pipe($.inject(appFile, {relative: true, name: 'app'}))
            .pipe($.inject(appCssFile, {relative: true, name: 'app'}))
            // .pipe($.minifyHtml())
            .pipe(gulp.dest(config.dist.dirs.root));
    });

    gulp.task('dist', ['dist:assets', 'dist:inject']);

};