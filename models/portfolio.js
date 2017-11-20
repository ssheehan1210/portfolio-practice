const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
	updated: {type: Date, default: Date.now},
	age: Number,
	location: String,
	latestJob: {role: String, company: String, currentJob: Boolean},
	previousJobs: [{role: String, company: String, currentJob: false}],
	technicalLanguages: [String],
	webDevelopmentSkills: [String],
	projects: [{projectName: String, technologies: [String]}]
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
