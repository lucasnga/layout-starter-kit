var express = require('express'),
    sass    = require('node-sass'),
    path    = require('path'),
    sassMiddleware = require('node-sass-middleware');

var app = express();

app.use(
	sassMiddleware({
		src: __dirname + '/source/scss',
		dest: __dirname + '/build',
		outputStyle: 'compressed',
		sourceMap: true,
		debug: true,
		prefix:  '/build'
	})
);
app.use('/',express.static(path.join(__dirname, 'source')));
app.use('/build',express.static(path.join(__dirname, 'build')));
app.use('/fonts',express.static(path.join(__dirname, 'assets/fonts')));
app.use('/images',express.static(path.join(__dirname, 'assets/images')));

app.listen(3000, () => console.log('Server started'));
