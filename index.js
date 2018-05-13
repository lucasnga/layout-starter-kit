const express = require('express'),
	path = require('path'),
	sassMiddleware = require('node-sass-middleware');
const { assets } = require('./config');

const app = express();

app.use(
	sassMiddleware({
		src: path.join(__dirname, '/src/scss'),
		dest: path.join(__dirname, '/dst/css'),
		outputStyle: 'compressed',
		sourceMap: true,
		debug: true,
		prefix: '/css'
	})
);

app.use('/', express.static(path.join(__dirname, 'src')));
app.use('/css', express.static(path.join(__dirname, 'dst/css')));
app.use(express.static(path.join(__dirname, 'assets')));

assets.forEach(directory => {
	app.use(directory, express.static(path.join(__dirname, `${directory}`)));
});

app.listen(3000, () =>
	console.log('Server started -> open url in browser http://localhost:3000 ')
);
