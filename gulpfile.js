/**
 * Created by Konstantinos Tsatsarounos<konstantinos.tsatsarounos@gmail.com>
 * Project Name:
 * Filename: ${FILE_NAME}
 * Date: 14/10/2016
 * Time: 7:27 μμ
 */

var gulp = require('gulp');

gulp.task('default', function(){
    gulp.src([
	    'node_modules/angular/*.js',
	    'node_modules/angular/*.css'
    ]).pipe( gulp.dest('libs/angular') );
});

gulp.task('module1', function(){
    //gulp.src();
});

gulp.task('watch1', function () {
	gulp.watch('module1/**/*', ['module1']);
});