const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
	name: String
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
