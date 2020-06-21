const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define path for Express config
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather',
		name: 'Darius David'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About',
		name: 'Darius David'
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		helpText: 'For more information see section below',
		name: 'Darius David'
	});
});

app.get('/weather', (req, res) => {
	res.send({
		forecast: 'It is snowing',
		location: 'Cluj'
	});
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		'404': 'Help article not found',
		name: 'Darius David'
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		'404': 'Page not found',
		name: 'Darius David'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000.');
});
