const portfolios = [{
	name: 'Sam',
	fullName: 'Dennis Samuel Sheehan',
	age: 25,
	location: 'Chicago, IL',
	latestJob: {
		role: 'Full-Stack Web Developer',
		company: 'General Assembly',
		currentJob: true
	},
	previousJobs: [
		{
			role: 'Sourcing Specialist',
			company: 'Avionos',
			currentJob: false
		},
		{
			role: 'Research Intern',
			company: 'Air Force Research Lab',
			currentJob: false
		}
	],
	technicalLanguages: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'AJAX / JSON'],
	webDevelopmentSkills: ['Bootstrap', 'Git/GitHub', 'MongoDB / Mongoose'],
	projects: [
	{
		projectName: '(Unofficial) Disney Vault Database',
		image: '#',
		summary: 'This is where the brief summary will go...',
		technologies: ['HTML', 'CSS / LESS', 'JavaScript / jQuery', 'Bootstrap', 'MongoDB / Mongoose', 'Node / Express', 'AJAX / JSON']
	},
	{
		projectName: 'Pop-Culture Jeopardy',
		image: '#',
		summary: 'Put summary here...',
		technologies: ['HTML', 'CSS', 'JavaScript / jQuery', 'AJAX / JSON']
	}
	]
}];

module.exports = portfolios;
