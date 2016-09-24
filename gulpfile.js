const 
	gulp 			= require('gulp'),
	postcss 		= require('gulp-postcss'),
	browserSync 	= require('browser-sync').create(),
	rename 			= require('gulp-rename')
	browserify 		= require('browserify'),
	babelify 		= require('babelify'),
	source 			= require('vinyl-source-stream'),
	SRC 			= './src',
	DIST 			= './dist',
	SRC_JS 			= `${SRC}/js`,
	SRC_CSS 		= `${SRC}/css`,
	PATH = {
		index: 		'./index.html',
		jsxAll: 	`${SRC_JS}/*.jsx`,
		cssAll: 	`${SRC_CSS}/*.css`,
		jsxEntry: 	`${SRC_JS}/main.jsx`,
		cssEntry: 	`${SRC_CSS}/index.css`,
		jsBundle: 	`${DIST}/bundle.js`,
		cssBundle: 	`${DIST}/bundle.css`,
	}


gulp.task('jsx:jsbundle', () => browserify({entries: PATH.jsxEntry, debug: true})
	.transform('babelify', {
		presets: ['es2015'],
		plugins: ['transform-react-jsx'],
	}).bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest(DIST))
)


gulp.task('cssnext:cssbundle', () => gulp.src(PATH.cssEntry)
	.pipe(postcss([
		require("postcss-import")(),
		require("postcss-cssnext")(),
	]))
	.pipe(rename('bundle.css'))        
	.pipe(gulp.dest(DIST))
)


gulp.task('serve', () => {
	browserSync.init({server: './'})
	gulp.watch([
		PATH.index, 
		PATH.jsBundle, 
		PATH.cssBundle
	]).on('change', browserSync.reload)
	gulp.watch(PATH.jsxAll, gulp.series(['jsx:jsbundle']))
	gulp.watch(PATH.cssAll, gulp.series(['cssnext:cssbundle']))
})


gulp.task('default', 
	gulp.series([
		gulp.parallel([
			gulp.series(['jsx:jsbundle']),
			gulp.series(['cssnext:cssbundle'])
		]),
		'serve'
	])
)
