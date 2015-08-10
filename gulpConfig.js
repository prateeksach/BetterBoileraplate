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
        less      : 'src/less/main.less',
        watchLess : 'src/less/**/*.less',
        templates : 'src/templates/**/*.tpl.html',
        index     : 'src/index.html',
        js        : 'src/js/**/*.js',
        css       : 'main.css',
        assets    : 'src/assets/**/*'
    },
    dist: {
        dirs: {
            root       : 'build/',
            css        : 'build/css/',
            js         : 'build/js/',
            assets     : 'build/assets/'
        },
        files: {
            index      : 'build/index.html',
            js         : 'app.min.js',
            vendor     : 'vendor.min.js',
            css        : 'main.css'
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
