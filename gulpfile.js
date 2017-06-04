var gulp = require('gulp');
var postcss = require('gulp-postcss');
var salt = require('./index.js');

gulp.task('css', function ()
{
  // var processors = [
  //   salt({})
  // ];

	// var processors = [
	// 	myplugin({
	// 		fontstacks: {
	// 			// 'Extra Stack': '"Extra Stack", "Moar Fonts", Extra, serif',
	// 			// 'Arial': 'Arial, "Comic Sans"'
	// 		}
	// 	})
	// ];

	return gulp.src('./src/*.css')
		.pipe(postcss())
		.pipe(gulp.dest('./build'));
});
