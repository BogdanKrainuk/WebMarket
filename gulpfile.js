'use strict';

const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');

sass.compiler = require('node-sass');

exports.sass = function () {
    return src('./src/styles/header.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss("header.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist'));
};

exports.sassWatch = function () {
    watch('./src/styles/header.scss', series('sass'));
};

