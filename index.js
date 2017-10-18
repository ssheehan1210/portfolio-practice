const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');

const portfolioController = require('./controllers/portfolio');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.use('/portfolio', portfolioController);

app.listen(3000, () => {
	console.log('app is listening on port 3000');
})
