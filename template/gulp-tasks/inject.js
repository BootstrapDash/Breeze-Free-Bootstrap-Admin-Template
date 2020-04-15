"use strict";
var gulp = require("gulp");
var injectPartials = require("gulp-inject-partials");
var inject = require("gulp-inject");
var rename = require("gulp-rename");
var prettify = require("gulp-prettify");
var replace = require("gulp-replace");
var merge = require("merge-stream");

/* inject partials like sidebar and navbar */
gulp.task("injectPartial", function () {
  return gulp
    .src("./**/*.html", {
      base: "./",
    })
    .pipe(injectPartials())
    .pipe(gulp.dest("."));
});

/* inject Js and CCS assets into HTML */
gulp.task("injectAssets", function () {
  return gulp
    .src(["./**/*.html"])
    .pipe(
      inject(
        gulp.src(
          [
            "./assets/vendors/mdi/css/materialdesignicons.min.css",
            "./assets/vendors/flag-icon-css/css/flag-icon.min.css",
            "./assets/vendors/css/vendor.bundle.base.css",
            "./assets/vendors/js/vendor.bundle.base.js",
          ],
          {
            read: false,
          }
        ),
        {
          name: "plugins",
          relative: true,
        }
      )
    )
    .pipe(
      inject(
        gulp.src(
          [
            // './assets/css/shared/style.css',
            "./assets/js/off-canvas.js",
            "./assets/js/hoverable-collapse.js",
            "./assets/js/misc.js",
          ],
          {
            read: false,
          }
        ),
        {
          relative: true,
        }
      )
    )
    .pipe(gulp.dest("."));
});

/*replace image path and linking after injection*/

gulp.task("html-beautify", function () {
  return gulp
    .src(["./**/*.html", "!node_modules/**/*.html"])
    .pipe(
      prettify({
        unformatted: ["pre", "code", "textarea"],
      })
    )
    .pipe(
      gulp.dest(function (file) {
        return file.base;
      })
    );
});

/*sequence for injecting partials and replacing paths*/
gulp.task(
  "inject",
  gulp.series("injectPartial", "injectAssets", "html-beautify")
);
