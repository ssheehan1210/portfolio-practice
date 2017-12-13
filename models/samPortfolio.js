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
		currentJob: false
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
	webDevelopmentSkills: ['Bootstrap', 'Git/GitHub', 'MongoDB / Mongoose', 'Express', 'React.js', 'Angular', 'Sinatra'],
	projects: [
		{
			projectName: 'Table-Top RPG Character Sheet Manager',
			image: 'project_4_screenshot.png',
			summary: 'Single-page app that lets users create/update/save their RPG character sheets (includes in-depth creation tutorials)',
			technologies: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap', 'React.js', 'Ruby', 'Rails', 'AJAX / JSON'],
			link: 'https://github.com/ssheehan1210/project_four'
		},
		{
			projectName: 'Character Info Sheet Manager',
			image: 'project_3_screenshot.png',
			summary: 'Single-page app that allows you to create/save information cards and forms of your own self-made superheroes',
			technologies: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap', 'React.js', 'Ruby', 'Sinatra', 'JSON'],
			link: 'https://github.com/ssheehan1210/hero-info-sheet-manager'
		},
		{
			projectName: '(Unofficial) Disney Vault Database',
			image: 'project_2_screenshot.png',
			summary: 'Web app where users can search for any Disney movie, update their production info and post comments',
			technologies: ['HTML5', 'CSS / LESS', 'JavaScript / jQuery', 'Bootstrap', 'MongoDB / Mongoose', 'Node.js / Express', 'AJAX / JSON'],
			link: 'https://github.com/tomlouismurphy/mediafranchiseapp'
		},
		{
			projectName: 'Pop-Culture Jeopardy',
			image: 'project_1_screenshot.png',
			summary: 'Game app based on the popular game show that uses questions/answers pulled from various trivia APIs',
			technologies: ['HTML5', 'CSS', 'JavaScript / jQuery', 'AJAX / JSON'],
			link: 'https://github.com/ssheehan1210/ssheehan1210.github.io/tree/master/project1'
		}
	]
}];

module.exports = portfolios;
