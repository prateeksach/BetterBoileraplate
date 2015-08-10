module.exports = {
    env: {
        dev  : 'dev',
        prod : 'prod'
    },
    bower: {
        bowerrc: '.bowerrc',
        bowerJson: 'bower.json',
        directory: 'src/vendor/'
    },
    dirs: {
        tasks : 'tasks/',
        bower : 'src/vendor/',
        src   : 'src/',
        css   : 'src/css/'
    },
    files: {
        watchSass : 'src/scss/**/*.scss',
        templates : 'src/templates/**/*.tpl.html',
        assets    : 'src/assets/**/*',
        js        : 'src/js/**/*.js',

        css       : 'main.css',
        index     : 'src/index.html',
        sass      : 'src/scss/main.scss'
    },
    dist: {
        dirs: {
            root       : 'build/',
            js         : 'build/js/',
            css        : 'build/css/',
            assets     : 'build/assets/'
        },
        files: {
            css        : 'main.css',
            js         : 'app.min.js',
            vendor     : 'vendor.min.js',
            index      : 'build/index.html'
        }
    },
    templateCache: {
        file    : 'src/js/templates.js',
        options : {
            module     : 'templates.module',
            root       : 'templates/',
            standalone : true
        },
        dest : ''
    },
    server: {
        port: 8000,
        host: 'localhost',
        index: 'index.html'
    }
};