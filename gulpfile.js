const gulp = require('gulp')
const watch = require('gulp-watch')
const include = require('gulp-file-include')
const sass = require('gulp-sass')
const flatten = require('gulp-flatten')

gulp.task('default', function () {
    watch('./src/**/*', { ignoreInitial: false }, function () {
        gulp.start('build')
    })
})

gulp.task('build', ['sass', 'template', 'js'])
gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(flatten())
        .pipe(gulp.dest('./public/css'))
})
gulp.task('template', function () {
    return gulp.src(['./src/**/*.html', 
        '!./src/shared/*.html'])
        .pipe(include())
        .pipe(flatten())
        .pipe(gulp.dest('./public'))
})
gulp.task('js', function () {
    return gulp.src('./src/**/*.js')
        .pipe(flatten())
        .pipe(gulp.dest('./public/js'))
})