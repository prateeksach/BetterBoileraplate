// Initialize/require libraries
var _ = require('lodash');
var gulp = require('gulp');
var config = require('./gulpconfig');

var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var requireDir = require('require-dir');

// Check if production environment
var isProd = (process.env.NODE_ENV === config.env.prod) || false;

// Load the individual tasks from the tasks folder
var tasks = requireDir(config.dirs.tasks);
_.each(tasks, function (task) {
    task(gulp, config, plugins, isProd, browserSync);
});

// Set Default Task
gulp.task('default', ['watch']);

// Watch Files
gulp.task('watch', ['templatecache', 'sass', 'inject', 'serve'], function () {
    gulp.watch(config.files.watchSass, ['sass']);
    gulp.watch(config.files.index, ['inject', browserSync.reload]);
    gulp.watch([config.files.js, config.files.templates], browserSync.reload);
});