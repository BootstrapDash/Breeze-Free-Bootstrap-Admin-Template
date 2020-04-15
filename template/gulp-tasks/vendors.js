"use strict";
var gulp = require("gulp");
var concat = require("gulp-concat");
var merge = require("merge-stream");
const del = require("del");

gulp.task("clean:vendors", function () {
  return del(["./assets/vendors/**/*"]);
});

/*Building vendor scripts needed for basic template rendering*/
gulp.task("buildBaseVendorScripts", function () {
  return gulp
    .src([
      "./node_modules/jquery/dist/jquery.min.js",
      "./node_modules/popper.js/dist/umd/popper.min.js",
      "./node_modules/bootstrap/dist/js/bootstrap.min.js",
      "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js",
    ])
    .pipe(concat("vendor.bundle.base.js"))
    .pipe(gulp.dest("./assets/vendors/js"));
});

/*Building vendor styles needed for basic template rendering*/
gulp.task("buildBaseVendorStyles", function () {
  return gulp
    .src(["./node_modules/perfect-scrollbar/css/perfect-scrollbar.css"])
    .pipe(concat("vendor.bundle.base.css"))
    .pipe(gulp.dest("./assets/vendors/css"));
});

/*Scripts for addons*/
gulp.task("buildOptionalVendorScripts", function () {
  var aScript1 = gulp
    .src(["node_modules/chart.js/dist/Chart.min.js"])
    .pipe(gulp.dest("./assets/vendors/chart.js"));
  var aScript5 = gulp
    .src(["node_modules/moment/moment.js"])
    .pipe(gulp.dest("./assets/vendors/moment"));
  var aScript10 = gulp
    .src(["node_modules/flot/dist/es5/jquery.flot.js"])
    .pipe(gulp.dest("./assets/vendors/flot"));
  var aScript11 = gulp
    .src(["node_modules/flot/source/jquery.flot.resize.js"])
    .pipe(gulp.dest("./assets/vendors/flot"));
  var aScript12 = gulp
    .src(["node_modules/flot/source/jquery.flot.categories.js"])
    .pipe(gulp.dest("./assets/vendors/flot"));
  var aScript13 = gulp
    .src(["node_modules/flot/source/jquery.flot.fillbetween.js"])
    .pipe(gulp.dest("./assets/vendors/flot"));
  var aScript14 = gulp
    .src(["node_modules/flot/source/jquery.flot.stack.js"])
    .pipe(gulp.dest("./assets/vendors/flot"));
  var aScript15 = gulp
    .src(["node_modules/flot/source/jquery.flot.pie.js"])
    .pipe(gulp.dest("./assets/vendors/flot"));
  var aScript23 = gulp
    .src(["node_modules/pwstabs/assets/jquery.pwstabs.min.js"])
    .pipe(gulp.dest("./assets/vendors/pwstabs"));
  var aScript29 = gulp
    .src(["node_modules/jquery-file-upload/js/jquery.uploadfile.min.js"])
    .pipe(gulp.dest("./assets/vendors/jquery-file-upload"));

  var aScript30 = gulp
    .src(["node_modules/jquery-asColor/dist/jquery-asColor.min.js"])
    .pipe(gulp.dest("./assets/vendors/jquery-asColor"));
  var aScript31 = gulp
    .src(["node_modules/jquery-asGradient/dist/jquery-asGradient.min.js"])
    .pipe(gulp.dest("./assets/vendors/jquery-asGradient"));
  var aScript32 = gulp
    .src(["node_modules/jquery-asColorPicker/dist/jquery-asColorPicker.min.js"])
    .pipe(gulp.dest("./assets/vendors/jquery-asColorPicker"));

  var aScript33 = gulp
    .src([
      "node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
    ])
    .pipe(gulp.dest("./assets/vendors/bootstrap-datepicker"));
  var aScript34 = gulp
    .src(["node_modules/moment/min/moment.min.js"])
    .pipe(gulp.dest("./assets/vendors/moment"));
  var aScript38 = gulp
    .src(["node_modules/typeahead.js/dist/typeahead.bundle.min.js"])
    .pipe(gulp.dest("./assets/vendors/typeahead.js"));
  var aScript39 = gulp
    .src(["node_modules/select2/dist/js/select2.min.js"])
    .pipe(gulp.dest("./assets/vendors/select2"));
  var aScript40 = gulp
    .src(["node_modules/codemirror/lib/codemirror.js"])
    .pipe(gulp.dest("./assets/vendors/codemirror"));
  var aScript41 = gulp
    .src(["node_modules/codemirror/mode/javascript/javascript.js"])
    .pipe(gulp.dest("./assets/vendors/codemirror"));
  var aScript42 = gulp
    .src(["node_modules/codemirror/mode/shell/shell.js"])
    .pipe(gulp.dest("./assets/vendors/codemirror"));
  var aScript46 = gulp
    .src(["node_modules/bootstrap-maxlength/bootstrap-maxlength.min.js"])
    .pipe(gulp.dest("./assets/vendors/bootstrap-maxlength"));
  var aScript65 = gulp
    .src(["node_modules/twbs-pagination/jquery.twbsPagination.min.js"])
    .pipe(gulp.dest("./assets/vendors/twbs-pagination"));
  var aScript70 = gulp
    .src(["./node_modules/tinymce/**/*"])
    .pipe(gulp.dest("./assets/vendors/tinymce"));
  return merge(
    aScript1,
    aScript5,
    aScript10,
    aScript11,
    aScript12,
    aScript13,
    aScript14,
    aScript15,
    aScript23,
    aScript29,
    aScript30,
    aScript31,
    aScript32,
    aScript33,
    aScript34,
    aScript38,
    aScript39,
    aScript40,
    aScript41,
    aScript42,
    aScript46,
    aScript65,
    aScript70
  );
});

/*Styles for addons*/
gulp.task("buildOptionalVendorStyles", function () {
  var aStyle1 = gulp
    .src(["./node_modules/@mdi/font/css/materialdesignicons.min.css"])
    .pipe(gulp.dest("./assets/vendors/mdi/css"));
  var aStyle2 = gulp
    .src(["./node_modules/@mdi/font/fonts/*"])
    .pipe(gulp.dest("./assets/vendors/mdi/fonts"));
  var aStyle3 = gulp
    .src(["./node_modules/font-awesome/css/font-awesome.min.css"])
    .pipe(gulp.dest("./assets/vendors/font-awesome/css"));
  var aStyle4 = gulp
    .src(["./node_modules/font-awesome/fonts/*"])
    .pipe(gulp.dest("./assets/vendors/font-awesome/fonts"));
  var aStyle5 = gulp
    .src(["./node_modules/flag-icon-css/css/flag-icon.min.css"])
    .pipe(gulp.dest("./assets/vendors/flag-icon-css/css"));
  var aStyle6 = gulp
    .src(["./node_modules/flag-icon-css/flags/**/*"])
    .pipe(gulp.dest("./assets/vendors/flag-icon-css/flags"));
  var aStyle10 = gulp
    .src(["./node_modules/ti-icons/fonts/*"])
    .pipe(gulp.dest("./assets/vendors/ti-icons/fonts"));
  var aStyle28 = gulp
    .src(["node_modules/jquery-file-upload/css/uploadfile.css"])
    .pipe(gulp.dest("./assets/vendors/jquery-file-upload"));

  var aStyle32 = gulp
    .src([
      "node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css",
    ])
    .pipe(gulp.dest("./assets/vendors/bootstrap-datepicker"));
  var aStyle34 = gulp
    .src(["node_modules/select2/dist/css/select2.min.css"])
    .pipe(gulp.dest("./assets/vendors/select2"));
  var aStyle35 = gulp
    .src([
      "node_modules/select2-bootstrap-theme/dist/select2-bootstrap.min.css",
    ])
    .pipe(gulp.dest("./assets/vendors/select2-bootstrap-theme"));
  var aStyle36 = gulp
    .src(["node_modules/codemirror/lib/codemirror.css"])
    .pipe(gulp.dest("./assets/vendors/codemirror"));
  var aStyle37 = gulp
    .src(["node_modules/codemirror/theme/ambiance.css"])
    .pipe(gulp.dest("./assets/vendors/codemirror"));
  var aStyle53 = gulp
    .src(["node_modules/ion-rangeslider/img/*"])
    .pipe(gulp.dest("./assets/vendors/ion-rangeslider/img"));
  var aStyle54 = gulp
    .src(["node_modules/pwstabs/assets/jquery.pwstabs.min.css"])
    .pipe(gulp.dest("./assets/vendors/pwstabs"));
  var aStyle56 = gulp
    .src(["node_modules/typicons.font/src/font/*"])
    .pipe(gulp.dest("./assets/vendors/typicons"));
  var aStyle57 = gulp
    .src(["./node_modules/jstree/dist/**/*"])
    .pipe(gulp.dest("./assets/vendors/jstree"));
  var aStyle58 = gulp
    .src(["./node_modules/puse-icons-feather/**/*"])
    .pipe(gulp.dest("./assets/vendors/puse-icons-feather"));
  return merge(
    aStyle1,
    aStyle2,
    aStyle3,
    aStyle4,
    aStyle5,
    aStyle6,
    aStyle10,
    aStyle28,
    aStyle32,
    aStyle34,
    aStyle35,
    aStyle36,
    aStyle37,
    aStyle53,
    aStyle54,
    aStyle56,
    aStyle57,
    aStyle58
  );
});

//Copy essential map files
gulp.task("copyMapFiles", function () {
  var map1 = gulp
    .src("node_modules/bootstrap/dist/js/bootstrap.min.js.map")
    .pipe(gulp.dest("./assets/vendors/js"));
  var map2 = gulp
    .src("node_modules/@mdi/font/css/materialdesignicons.min.css.map")
    .pipe(gulp.dest("./assets/vendors/mdi/css"));

  var map9 = gulp
    .src("node_modules/jquery-asGradient/dist/jquery-asGradient.min.js.map")
    .pipe(gulp.dest("./assets/vendors/jquery-asGradient"));
  return merge(map1, map2, map9);
});

/*sequence for building vendor scripts and styles*/
gulp.task(
  "bundleVendors",
  gulp.series(
    "clean:vendors",
    "buildBaseVendorStyles",
    "buildBaseVendorScripts",
    "buildOptionalVendorStyles",
    "buildOptionalVendorScripts",
    "copyMapFiles"
  )
);
