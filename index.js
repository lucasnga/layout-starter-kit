const express = require('express'),
	path = require('path'),
	sass = require('node-sass'),
	sassMiddleware = require('node-sass-middleware');

const app = express();

app.use(
	sassMiddleware({
		src: path.join(__dirname, '/src/scss'),
		dest: path.join(__dirname, '/build'),
		outputStyle: 'compressed',
		sourceMap: true,
		debug: true,
		prefix: '/build'
	})
);
app.use('/', express.static(path.join(__dirname, 'src')));
app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/fonts', express.static(path.join(__dirname, 'assets/fonts')));
app.use('/images', express.static(path.join(__dirname, 'assets/images')));
app.listen(3000, () =>
	console.log('Server started -> open url in browser http://localhost:3000 ')
);
