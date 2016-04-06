var gulp = require('gulp'),
	connect = require('gulp-connect'),
	uglify = require('gulp-uglify'),
	browserify = require('gulp-browserify');


gulp.task('browserify',function(){
	gulp.src('./app/js/*.js').pipe(browserify({
		transform: 'reactify',
	})).pipe(gulp.dest('./dist/js'))
});

gulp.task('connect',function(){
	connect.server({
		port: 8888
	})
});

gulp.task('uglify',function(){
	gulp.src('./app/js/*.js').pipe(gulp.dest('./dist/js'));
})

gulp.task('watch',function(){
	gulp.watch('./app/js/**/*.js',['browserify']);
})


gulp.task('default',['browserify','connect','watch']);
