const portfolios = [{
	name: 'Sam',
	firstName: 'Dennis',
	middleName: 'Samuel',
	lastName: 'Sheehan',
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
	webDevelopmentSkills: ['Bootstrap', 'Git/GitHub', 'MongoDB / Mongoose', 'Express', 'React.JS', 'Angular', 'Sinatra'],
	projects: [
		{
			projectName: 'Character Info Sheet Manager',
			image: '#',
			summary: 'Place summary here...',
			technologies: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap', 'React.JS', 'Ruby', 'Sinatra', 'JSON']
		},
		{
			projectName: '(Unofficial) Disney Vault Database',
			image: '#',
			summary: 'This is where the brief summary will go...',
			technologies: ['HTML5', 'CSS / LESS', 'JavaScript / jQuery', 'Bootstrap', 'MongoDB / Mongoose', 'Node.JS / Express', 'AJAX / JSON']
		},
		{
			projectName: 'Pop-Culture Jeopardy',
			image: '#',
			summary: 'Put summary here...',
			technologies: ['HTML5', 'CSS', 'JavaScript / jQuery', 'AJAX / JSON']
		}
	]
}];

module.exports = portfolios;
