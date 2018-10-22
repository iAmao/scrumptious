const fs = require('fs')
const gulp = require('gulp')
const babel = require('gulp-babel')


const babelConfig = JSON.parse(fs.readFileSync('./.babelrc'))
const babelrc = babel(babelConfig)

gulp.task('build-server', () =>
  gulp.src('./server/**/*.js')
    .pipe(babelrc)
    .pipe(gulp.dest('dist/')))

gulp.task('build-knex', () =>
  gulp.src('./knexfile.js')
    .pipe(babelrc)
    .pipe(gulp.dest('dist/')))

gulp.task('default', ['build-server', 'build-knex'])
