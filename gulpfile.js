// Load modules
const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const Fiber = require('fibers')
const notify = require('gulp-notify')
const sass = require('gulp-dart-sass')
const sourceMaps = require('gulp-sourcemaps')

// paths
const path = {
  styles: {
    src: './assets/scss/styles.scss',
    dest: './assets/css/',
    watch: './assets/scss/**/*.scss'
  }
}

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

function watchfiles () {
  gulp.watch(path.styles.watch, gulp.series(styles))
}

gulp.task('styles', styles)
gulp.task('default', gulp.parallel(styles))
gulp.task('watch', gulp.parallel(browsersync, watchfiles))
