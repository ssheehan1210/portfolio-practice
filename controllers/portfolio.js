const express = require('express');
const router = express.Router();
const portfolios = require('../models/samPortfolio');

router.route('/')
	.get((req, res) => {
		res.render('index', { portfolio: portfolios });
	})

module.exports = router;
