﻿/// <binding BeforeBuild='copy:css, copy:js, copy:font' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify');

var paths = {
    webroot: "./wwwroot/"
};

paths.bootstrapCss = "./bower_components/bootstrap/dist/css/bootstrap.css";
paths.sbAdminCss = "./bower_components/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css";
paths.fontAwesomeCss = "./bower_components/font-awesome/css/font-awesome.css";
paths.morrisCss = "./bower_components/morrisjs/morris.css";
paths.metisMenuCss = "./bower_components/metismenu/src/metisMenu.css";


paths.jqueryJs = "./bower_components/jquery/dist/jquery.js";
paths.raphaelJs = "./bower_components/raphael/raphael.js";
paths.morrisJs = "./bower_components/morrisjs/morris.js";
paths.bootstrapJs = "./bower_components/bootstrap/dist/js/bootstrap.js";
paths.sbAdminJs = "./bower_components/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js";
paths.metisMenuJs = "./bower_components/metismenu/src/metisMenu.js";

paths.fonts = "./bower_components/font-awesome/fonts/*";

paths.jsDest = paths.webroot + "js";
paths.cssDest = paths.webroot + "css";
paths.fontDest = paths.webroot + "fonts";

gulp.task('min:js', function () {
    return gulp.src([paths.jqueryJs, paths.raphaelJs, paths.morrisJs, paths.bootstrapJs, paths.sbAdminJs, paths.metisMenuJs])
        .pipe(concat(paths.jsDest + "/min/site.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("copy:js", function() {
    return gulp.src([paths.jqueryJs, paths.raphaelJs, paths.morrisJs, paths.bootstrapJs, paths.sbAdminJs, paths.metisMenuJs])
        .pipe(gulp.dest(paths.jsDest));
});

gulp.task('min:css', function () {
    return gulp.src([paths.bootstrapCss, paths.sbAdminCss, paths.fontAwesomeCss, paths.morrisCss, paths.metisMenuCss])
        .pipe(concat(paths.cssDest + "/min/site.min.css"))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("copy:css", function () {
    return gulp.src([paths.bootstrapCss, paths.sbAdminCss, paths.fontAwesomeCss, paths.morrisCss, paths.metisMenuCss])
        .pipe(gulp.dest(paths.cssDest));
});

gulp.task("copy:font", function () {
    return gulp.src([paths.fonts])
        .pipe(gulp.dest(paths.fontDest));
});

gulp.task("min", ["min:js", "min:css", "copy:fonts"]);
gulp.task("copy", ["copy:js", "copy:css", "copy:fonts"]);