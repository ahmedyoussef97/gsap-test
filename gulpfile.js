var gulp = require('gulp');
var { src, dest, series, watch } = require('gulp');
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const webp = require('gulp-webp');

const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const merge = require("merge-stream");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const replace = require("gulp-replace");


const srcPath = "./src/";
const distPath = "./dist/";

// var paths = {
//   styles: {
//     src: 'src/css/**/*.css',
//     dest: 'assets/css/'
//   },
//   scripts: {
//     src: 'src/scripts/**/*.js',
//     dest: 'assets/scripts/'
//   }
// };

function CompileSass() {
  return gulp
    .src(srcPath + "scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(sourcemaps.write("./maps/"))
    .pipe(gulp.dest(srcPath + "css/"));
};
function WatchSass() {
  watch(srcPath + "scss/**/*.scss", CompileSass);
};
function DeployCss() {
  return gulp
    .src(srcPath + "css/**/*.css")
    .pipe(gulp.dest(distPath + "css/"));
};
function DeployCssmin() {
  return gulp
    .src(srcPath + "css/**/*.css")
    .pipe(cssmin())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest(distPath + "css/"));
};
function WebpImages(){
  return gulp
    .src(srcPath + "images/to-webp/*")
    .pipe(gulp.dest(srcPath + "images/"))
    .pipe(webp())
    .pipe(gulp.dest(srcPath + "images/"));
}
const jsFiles = [
  srcPath + "scripts/vendors/vue.js",
  srcPath + "scripts/vendors/axios.min.js",
  srcPath + "scripts/vendors/swiper.min.js",
  srcPath + "scripts/vendors/noframework.waypoints.min.js",
  srcPath + "scripts/common.js",
  srcPath + "scripts/scripts.home.js",
  srcPath + "scripts/getBlogPosts.js"
];
function DeployJs(){
  var concatFiles = gulp
    .src(jsFiles)
    .pipe(concat("app.js"))
    .pipe(gulp.dest(distPath + "scripts/"));
  var copyFiles = gulp
    .src(srcPath + "scripts/**/*")
    .pipe(gulp.dest(distPath + "scripts/"));
  return merge(concatFiles, copyFiles);
};

function DeployImages(){
  return gulp
    .src(srcPath + "images/**/*")
    // .pipe(imagemin())
    .pipe(gulp.dest(distPath + "images/"));
};

function DeployVideos(){
  return gulp
    .src(srcPath + "videos/**/*")
    .pipe(gulp.dest(distPath + "videos/"));
};

function DeployFonts(){
  return gulp
    .src(srcPath + "fonts/**/*")
    .pipe(gulp.dest(distPath + "fonts/"));
};

function DeployHtml(){
  return (
    gulp
      .src("./*.html")
      .pipe(
        htmlmin({
          collapseWhitespace: true,
          removeComments: true
          // preserveLineBreaks: true
        })
      )
      .pipe(replace('"src/', '"./'))
      .pipe(replace('"/src/', '"./'))
      .pipe(replace('"./src/', '"./'))
      .pipe(replace('.css"', '.min.css"'))
      .pipe(
        replace('<script src="./scripts/vendors/swiper.min.js"></script>', "")
      )
      .pipe(
        replace(
          '<script src="./scripts/vendors/noframework.waypoints.min.js"></script>',
          ""
        )
      )
      .pipe(replace('<script src="./scripts/scripts.home.js"></script>', ""))
      .pipe(
        replace(
          '<script src="./scripts/common.js"></script>',
          '<script src="./scripts/app.js"></script>'
        )
      )
      .pipe(gulp.dest(distPath))
  );
};

exports.CompileSass = CompileSass;
exports.DeployCss = DeployCss;
exports.DeployCssmin = DeployCssmin;
exports.DeployJs = DeployJs;
exports.DeployImages = DeployImages;
exports.DeployVideos = DeployVideos;
exports.DeployFonts = DeployFonts;
exports.DeployHtml = DeployHtml;
exports.WebpImages = WebpImages;
exports.WatchSass = WatchSass;
exports.Deploy = series(DeployCss, DeployCssmin, DeployJs, DeployImages, DeployVideos, DeployFonts, DeployHtml);