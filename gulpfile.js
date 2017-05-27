var gulp=require('gulp');
var gulputil=require('gulp-util');


var uglifys=require('gulp-uglify');
var cssmin=require('gulp-minify-css');
var minifyHtml=require('gulp-minify-html');




//压缩js
gulp.task('myjs',function(){
	gulp.src('js/*.js').pipe(uglifys()).pipe(gulp.dest('two/js'));
});

//压缩css
gulp.task('myminifycss', function () {
	gulp.src('css/*.css').pipe(cssmin()).pipe(gulp.dest('two/css'));
});

//压缩html
gulp.task('myminifyhtml', function () {
	gulp.src('*.html').pipe(minifyHtml()).pipe(gulp.dest('two'));
});


gulp.task('default',['myjs','myminifycss','myminifyhtml']);