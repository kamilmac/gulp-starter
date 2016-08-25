const gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    cssnext = require("gulp-cssnext"),
    ts = require('gulp-typescript'),
    tsProject = ts.createProject('tsconfig.json'),
    browserSync = require('browser-sync').create(),
    rename = require("gulp-rename")

const SRC = "./src",
    DIST = "./dist",
    SRC_TS = `${SRC}/ts`,
    SRC_CSS = `${SRC}/css`,
    PATH = {
        index: "./index.html",
        tsAll: `${SRC_TS}/*.ts`,
        cssAll: `${SRC_CSS}/*.css`,
        jsEntry: `${SRC_TS}/main.js`,
        cssEntry: `${SRC_CSS}/index.css`,
        jsBundle: `${DIST}/bundle.js`,
        cssBundle: `${SRC_CSS}/bundle.css`,
    }

gulp.task('ts:js', () => tsProject.src()
    .pipe(ts(tsProject)).js
    .pipe(gulp.dest(SRC_TS))
)

gulp.task("js:jsbundle", () => gulp.src(PATH.jsEntry)
    .pipe(browserify())
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest(DIST))
)
 
gulp.task("cssnext:cssbundle", () => gulp.src(PATH.cssEntry)
    .pipe(cssnext({compress: true}))
    .pipe(rename("bundle.css"))        
    .pipe(gulp.dest(DIST))
)

gulp.task('serve', () => {
    browserSync.init({server: "./"})
    gulp.watch([PATH.index, PATH.jsBundle, PATH.cssBundle]).on('change', browserSync.reload)
    gulp.watch(PATH.tsAll, gulp.series(["ts:js", "js:jsbundle"]))
    gulp.watch(PATH.cssAll, gulp.series(["cssnext:cssbundle"]))
})

gulp.task('default', 
    gulp.series([
        gulp.parallel([
            gulp.series(["ts:js", "js:jsbundle"]),
            gulp.series(["cssnext:cssbundle"])
        ]),
        "serve"
    ])
)
