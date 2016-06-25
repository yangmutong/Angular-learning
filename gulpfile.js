var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require(('gulp-concat'));
gulp.task('default', ['serve']);

gulp.task('serve', function(){
  gulp.src("app/*/.js")
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(concat('script.js'))
      .pipe(gulp.dest("dist"));
});

gulp.task('watch', function(){
  var watcher = gulp.watch('app/*', ['serve']);
  watcher.on('change', function(event){
    console.log('Event type' + event.type);
    console.log('Event path' + event.path);
  });
  watcher.on('end',function(){

  });
  watcher.on('error', function(){

  });
});
