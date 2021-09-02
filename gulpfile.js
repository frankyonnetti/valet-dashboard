// Load modules
const gulp = require('gulp')
const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync').create()
const notify = require('gulp-notify')
const postcss = require('gulp-postcss')
const sass = require('gulp-dart-sass')
const sourceMaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

// paths
const path = {
  styles: {
    src: ['./assets/scss/styles.scss'],
    dest: './assets/css/',
    watch: './assets/scss/**/*.scss'
  },
  scripts: {
    src: ['./assets/js/scripts.js'],
    dest: './assets/js/min/',
    watch: './assets/js/*.js'
  }
}

// browserSync watch
function browsersync() {
  browserSync.init({
    port: 3510,
    proxy: 'https://server.test',
    open: false,
    notify: false,
    ghostMode: false,
    ui: false
  })
}

function reload(done) {
  browserSync.reload()
  done()
}

// Scss : expanded or compressed
function styles(done) {
  gulp.src(path.styles.src)
    .pipe(sourceMaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', function (err) {
      console.log(err.toString())
      this.emit('end')
    }))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest(path.styles.dest))
    .pipe(browserSync.stream())
    .pipe(notify({
      message: 'Sass compiled successfully', onLast: true
    }))

  done()
}

// Minify JS
function scripts(done) {
  gulp.src(path.scripts.src)
    .pipe(sourceMaps.init())
    .pipe(uglify()).on('error', function (err) {
      console.log(err.toString())
      this.emit('end')
    })
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest(path.scripts.dest))
    .pipe(browserSync.stream())
    .pipe(notify({
      message: 'JS uglified successfully', onLast: true
    }))

  done()
}

// watch files
function watchfiles() {
  gulp.watch(path.styles.watch, gulp.series(styles))
  gulp.watch(path.scripts.watch, gulp.series(scripts, reload))
}

gulp.task('styles', styles)
gulp.task('scripts', scripts)
gulp.task('default', gulp.parallel(styles, scripts))
gulp.task('watch', gulp.parallel(browsersync, watchfiles))
