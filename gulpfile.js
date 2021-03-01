// Load modules
const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const Fiber = require('fibers')
const notify = require('gulp-notify')
const sass = require('gulp-dart-sass')
const sourceMaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

// paths
const path = {
  styles: {
    src: './assets/scss/styles.scss',
    dest: './assets/css/',
    watch: './assets/scss/**/*.scss'
  },
  scripts: {
    src: ['./assets/js/scripts.js'],
    dest: './assets/js/min/',
    watch: './assets/js/scripts.js'
  }
}

// function reload (done) {
//   browserSync.reload()
//   done()
// }

// browserSync watch
function browsersync () {
  browserSync.init({
    port: 3510,
    proxy: 'https://server.test',
    open: false,
    notify: false,
    ghostMode: false,
    ui: {
      port: 3511
    }
  })
}

// Scss : expanded or compressed
function styles (done) {
  gulp.src(path.styles.src)
    .pipe(sourceMaps.init())
    .pipe(sass({
      fiber: Fiber,
      outputStyle: 'expanded'
    }).on('error', function (err) {
      console.log(err.toString())
      this.emit('end')
    }))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest(path.styles.dest))
    .pipe(browserSync.stream())
    .pipe(notify({ message: 'Dart sass compiled', onLast: true }))

  done()
}

// Minify JS
function scripts (done) {
  gulp.src(path.scripts.src)
    .pipe(sourceMaps.init())
    .pipe(uglify()).on('error', function (err) {
      console.log(err.toString())
      this.emit('end')
    })
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest(path.scripts.dest))
    .pipe(browserSync.stream())
    .pipe(notify({ message: 'JS uglified', onLast: true }))

  done()
}

function watchfiles () {
  gulp.watch(path.styles.watch, gulp.series(styles))
  // gulp.watch(path.scripts.watch, gulp.series(scripts, reload))
  gulp.watch(path.scripts.watch, gulp.series(scripts))
}

gulp.task('styles', styles)
gulp.task('scripts', scripts)
gulp.task('default', gulp.parallel(styles, scripts))
gulp.task('watch', gulp.parallel(browsersync, watchfiles))
