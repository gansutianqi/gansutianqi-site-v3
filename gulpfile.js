/**
 * Created by Administrator on 2017/9/18.
 */

var gulp = require('gulp');


/* 公共代码复用 */
var fileinclude = require('gulp-file-include');
gulp.task('fileinclude', function () {
    return gulp.src('src/**/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy:libs',function () {
    return gulp.src('src/libs/**/*')
        .pipe(gulp.dest('dist/libs'));
});

var del = require('del');

gulp.task('clean',function () {
    return del('dist');
});

var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('styles', function () {
    return gulp.src('src/styles/**/*.scss')
        .pipe(plumber())
        .pipe(sass.sync({
            outputStyle: 'nested' // Default: nested Values: nested, expanded, compact, compressed
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/styles'))
        .pipe(gulp.dest('./src/styles')); // 仅仅为了提示
});

/* 时时更新*/
var browserSync = require('browser-sync');
var reload = browserSync.reload;
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });
    gulp.watch(['src/**/*.html'], ['fileinclude', browserSync.reload]);
    gulp.watch(['dist/**/*.html'], browserSync.reload);
    gulp.watch(['src/styles/**/*.scss'],['styles',browserSync.reload]);
});


var runSequence = require('run-sequence');


gulp.task('default', function () {
    runSequence('clean',
        'copy:libs',
        'fileinclude',
        'styles',
        'serve');
});






