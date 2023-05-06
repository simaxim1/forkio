import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import nodeSass from 'sass';
import cleanCSS from 'gulp-clean-css';
import clean from 'gulp-clean';
import autoPrefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import imageMin from 'gulp-imagemin';
import browser from 'browser-sync';
import ghPages from 'gulp-gh-pages';

const sass = gulpSass(nodeSass);
const browserSync = browser.create();

const { src, dest, task, watch, series } = gulp;

const cleanDist = () => src('dist', { read: false })
  .pipe(clean());

const convertCss = () => src('src/sass/**/*')
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('main.min.css'))
	.pipe(cleanCSS())
	.pipe(autoPrefixer({cascade: false}))
	.pipe(dest('dist/styles'));

const convertJs = () => src('src/js/**/*', { base: 'src' })
  .pipe(concat('scripts.min.js'))
  .pipe(uglify())
  .pipe(dest('dist/js'))

const convertImg = () => src('src/img/**/*', { base: 'src' })
  .pipe(imageMin())
  .pipe(dest('dist'))

const updateHtml = () => src('*.html')
  // .pipe(dest('dist'))

const copyStatic = () => src('src/static/**/*')
  .pipe(dest('dist/static'))

const deploy = () => src('dist/**/*')
  .pipe(ghPages())

const startWatching = () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  watch('src/sass/**/*').on('all', series(convertCss, browserSync.reload));
  watch('src/js/**/*').on('all', series(convertJs, browserSync.reload));
  watch('src/img/**/*').on('all', series(convertImg, browserSync.reload));
  watch('*.html').on('all', series(updateHtml, browserSync.reload));
  watch('src/static/**/*').on('all', series(copyStatic, browserSync.reload));
}

const build = (done) => {
  gulp.series(cleanDist, convertCss, convertJs, convertImg, updateHtml, copyStatic)(done);  
}

task('build', build );
task('dev', startWatching);
task('deploy', deploy);