/**
 * Created by Administrator on 2017/9/18.
 */

var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var del = require('del');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('clean', function () {
    return del('dist');
});

// 复制HTML文件
gulp.task('copy:html', function () {
    return gulp.src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'));
});

// 复制图像
// TODO: 压缩优化图片
gulp.task('copy:images', function () {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'));
});

// 复制第三方依赖库
gulp.task('copy:libs', function () {
    return gulp.src(['src/libs/**/*'])
        .pipe(gulp.dest('dist/libs'));
});


// 复制javascript
// TODO: 编译javascript es6
gulp.task('scripts', function () {
    return gulp.src(['src/scripts/**/*'])
        .pipe(gulp.dest('dist/scripts'))
});

// 编译SCSS文件
gulp.task('styles', function () {
    return gulp.src('src/styles/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            outputStyle: 'nested' // Default: nested Values: nested, expanded, compact, compressed
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/styles'))
        .pipe(gulp.dest('./src/styles')); // 仅仅为了提示
});


// 启动一个serve
// 在dist目录提供服务
// 默认端口3000
gulp.task('serve', function () {
    browserSync({
        notfiy: false,
        server: ['dist'],
        port: 300
    });
    // 监视html变动,执行copy:html任务, 然后刷新浏览器
    gulp.watch(['src/**/*.html'], ['copy:html', browserSync.reload]);

    // 监视scr/styles目录变动,执行styles任务, 然后刷新浏览器
    gulp.watch(['src/styles/**/*.scss'], ['styles', browserSync.reload]);

    // 监视src/libs目录变动, 执行copy:libs任务, 然后刷新浏览器
    gulp.watch(['src/libs/**/*'], ['copy:libs'], browserSync.reload);

    // 监视src/images目录变动, 执行copy:images 任务, 然后刷新浏览器
    gulp.watch(['src/images/**/*'], ['copy:images'], browserSync.reload);

    // 监视src/scripts目录变动,执行scripts任务,然后刷新浏览器
    gulp.watch(['src/scripts/**/*'], ['scripts'], browserSync.reload);
});

// 默认任务
// 开发
gulp.task('default', function () {
    runSequence(
        'clean',
        'copy:images',
        'copy:libs',
        'copy:html',
        'scripts',
        'styles',
        'serve'
    );
});

// 构建
// 生成dist
gulp.task('build',['clean','copy:images','copy:libs','copy:html','scripts','styles']);