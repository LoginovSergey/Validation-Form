const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
// const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const cssnano = require('gulp-cssnano');

gulp.task('buildCSS', function(done){
   gulp.src('./sass/main.sass')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/css/'));
   done();
});
gulp.task('buildJS', function(done){
    gulp.src('./js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
    done()
});
gulp.task('buildFonts', function(done){
   gulp.src('./fonts/*')
       .pipe(gulp.dest('./dist/fonts'));
    done()
});

gulp.task('buildHtml', function(done){
    gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
    done()
});

gulp.task('buildImg', function(done){
   gulp.src('./img/*')
       .pipe(gulp.dest('./dist/img'));
    done()
});

gulp.task('Mask', function(done){
    gulp.src('./mask/*')
        .pipe(gulp.dest('./dist/mask'));
    done()
});

gulp.task('build', gulp.series('buildCSS', 'buildJS', 'buildFonts', 'buildHtml', 'buildImg', 'Mask'));
