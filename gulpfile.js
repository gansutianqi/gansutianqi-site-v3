/**
 * Created by Administrator on 2017/9/18.
 */

var gulp = require('gulp');


/* 公共代码复用 */
var fileinclude = require('gulp-file-include');
gulp.task('fileinclude', function () {
    gulp.src('src/**/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist'));
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
  /*  gulp.watch([paths.stylesFrom], ['styles', browserSync.reload]);
    gulp.watch([paths.scriptsFrom], ['scripts', browserSync.reload]);*/
});




// gulp-clean-css 压缩 css
exports.cleanCSS = {
    compatibility: 'ie8',
    keepSpecialComments: '*'
};

// gulp-uglify 压缩 js
exports.uglify = {
    mangle: {
        except: ['require', 'exports', 'module', '$']
    }
};


gulp.task('default', ['serve']);






