const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))

const less = require("gulp-less")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")

gulp.task("sass", function () {
    return gulp
        .src("src/css/**/*.sass")
        .pipe(sass().on("error", sass.logError))
        .pipe(concat("styles.min.css"))
        .pipe(gulp.dest("dist/css"))
})

gulp.task("less", function () {
    return gulp
        .src("src/css/**/*.less")
        .pipe(less())
        .pipe(concat("styles.min.css"))
        .pipe(gulp.dest("dist/css"))
})

gulp.task("js", function () {
    return gulp
        .src("src/js/**/*.js")
        .pipe(concat("scripts.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
})

gulp.task("build", gulp.series("sass", "less", "js"))

gulp.task("watch", function () {
    gulp.watch("src/css/**/*.sass", gulp.series("sass"))
    gulp.watch("src/css/**/*.less", gulp.series("less"))
    gulp.watch("src/js/**/*.js", gulp.series("js"))
})

gulp.task("default", gulp.series("build", "watch"))
