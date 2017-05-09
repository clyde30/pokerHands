var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

gulp.task('default', function() {
    livereload.listen();
    nodemon({
        script: 'server.js',
        ext: 'js'
    }).on('restart', function(){
        gulp.src('server.js')
        .pipe(livereload())
        .pipe(notify('Reloading page'))
    })
})