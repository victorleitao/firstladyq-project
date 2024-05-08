if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const api = process.env.API_URL;
const CONFIG_URL = './config';
const SERVICES_URL = './services';

const indexRouter = require('./routes/index');
const playerRouter = require(SERVICES_URL + '/players');

// Connecting to DB
require(CONFIG_URL + '/dbconfig');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(express.json());
app.use(expressLayouts);
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));

app.use('/', indexRouter);
app.use(api + '/players', playerRouter);

app.listen(process.env.PORT || 3000);
