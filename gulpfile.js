const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("default", function () {
	console.log("23333");
	return gulp.src("web_src/public/js/*.js")
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('build'));
});