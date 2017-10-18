const express = require('express');
const router = express.Router();
const Portfolio = require('../models/portfolio');

router.get('/', (req, res) => {
	res.render('index', {});
})

module.exports = router;
