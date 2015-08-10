var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();  // all of the gulp plugins
var config = require('./gulpConfig');
var browserSync = require('browser-sync').create();
var _ = require('lodash');
var requireDir = require('require-dir');

// check if production environment
var isProd = (process.env.NODE_ENV === config.env.prod) || false;

// load the individual tasks from the tasks folder
var tasks = requireDir(config.dirs.tasks);
_.each(tasks, function (task) {
    task(gulp, config, plugins, isProd, browserSync);
});

// Default Task
gulp.task('default', ['watch']);

// watch
gulp.task('watch', ['templatecache', 'less', 'inject', 'serve'], function () {
    gulp.watch(config.files.index, ['inject', browserSync.reload]);
    gulp.watch(config.files.watchLess, ['less']);
    gulp.watch([config.files.js, config.files.templates], browserSync.reload);
});