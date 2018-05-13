const gulp = require('gulp');
const { assets } = require('./config');

gulp.task('default', ['copy']);

const assetsGlob = assets.map(asset => {
	if (asset.slice(-1) === '/') {
		return `${asset}**`;
	} else {
		return asset;
	}
});

console.log(assetsGlob);

gulp.task('copy', () => {
	gulp
		.src(assetsGlob)
		.pipe(gulp.dest('build'));
});
