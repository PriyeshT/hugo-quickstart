'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import plugins from 'gulp-load-plugins';

gulp.task('sass', () => {
	gulp.src('./scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false	
	}))
	.pipe(cssnano({
		zindex: false	
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./static/css/'))
});

gulp.task('cssmin', () => {
	return gulp.src('./scss/**/*.scss')
		.pipe(plugins().sass({
			'outputStyle': 'compressed'	
		}).on('error', plugins().sass.logError))
		.pipe(gulp.dest('./static/css/'))
});

gulp.task('default', () => {
	gulp.watch('./scss/**/*.scss', ['sass', 'cssmin']);	
})