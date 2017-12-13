console.log('the optional js app file is running');

wow = new WOW({
	boxClass: 'wow', // default = 'wow'
    animateClass: 'animated', // default = 'animated'
    offset: 200, // default = 0
    mobile: true, // default = true
    live: true // default = true
})

wow.init();

// wowIn = new WOW({
// 	boxClass: 'wowIn', // default = 'wow'
//     animateClass: 'animateIn', // default = 'animated'
//     offset: 200, // default = 0
//     mobile: true, // default = true
//     live: true // default = true
// })

// wowIn.init();

// wowOut = new WOW({
// 	boxClass: 'wowOut',
// 	animateClass: 'animateOut',
// 	offset: 199,
// 	mobile: true,
// 	live: true
// })

// wowOut.init();

// if ($(".fadeInUp").visibility === "visible") {
// 	$(".fadeInUp").addClass("fadeOut");
// }

// const changeAniTwo = () => {
// 	if ($('#project2').class === 'border border-dark bg-secondary text-white wowIn fadeInUp') {
// 		$('#project2').attr('class', 'border border-dark bg-secondary text-white wowOut fadeOut');
// 	} else if ($('#project2').class === 'border border-dark bg-secondary text-white wowOut fadeOut') {
// 		$('#project2').attr('class', 'border border-dark bg-secondary text-white wowIn fadeInUp');
// 	}
// };

// const changeAniThree = () => {
// 	if ($('#project3').class === 'border border-dark bg-secondary text-white wowIn fadeInUp') {
// 		$('#project3').attr('class', 'border border-dark bg-secondary text-white wowOut fadeOut');
// 	} else if ($('#project3').class === 'border border-dark bg-secondary text-white wowOut fadeOut') {
// 		$('#project3').attr('class', 'border border-dark bg-secondary text-white wowIn fadeInUp');
// 	}
// };





// Uncomment this crap when you want to try to get the fade out stuff to work

// console.log($('#project1'));

// $('#project1').attr('class', 'border border-dark bg-secondary text-white animateIn wowIn fadeInUp');
// $('#project2').attr('class', 'border border-dark bg-secondary text-white animateIn wowIn fadeInUp');
// $('#project3').attr('class', 'border border-dark bg-secondary text-white animateIn wowIn fadeInUp');

// $('#project1').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
// 	console.log($('#project1')[0].attributes[0]);
// 	console.log($('#project1')[0].attributes[0].nodeValue);
// 	console.log($('#project1')[0].attributes[0].textContent);
// 	console.log($('#project1')[0].attributes[0].value);
// 	// if (e.currentTarget.attributes[0].textContent === 'border border-dark bg-secondary text-white wowIn fadeInUp') {
// 	if ($('#project1')[0].attributes[0].nodeValue === 'border border-dark bg-secondary text-white wowIn fadeInUp') {
// 		// $('#project1').attr('class', 'border border-dark bg-secondary text-white wowOut fadeOut');
// 		$('#project1').removeClass('border border-dark bg-secondary text-white wowIn fadeInUp').addClass('border border-dark bg-secondary text-white wowOut fadeOut');
// 		console.log($('#project1')[0].attributes[0]);
// 		console.log($('#project1')[0].attributes[0].nodeValue);
// 		console.log($('#project1')[0].attributes[0].textContent);
// 		console.log($('#project1')[0].attributes[0].value);
// 	// } else if (e.currentTarget.attributes[0].textContent === 'border border-dark bg-secondary text-white wowOut fadeOut') {
// 	} else if ($('#project1').className === 'border border-dark bg-secondary text-white wowOut fadeOut') {
// 		// $('#project1').attr('class', 'border border-dark bg-secondary text-white wowIn fadeInUp');
// 		$('#project1').className = 'border border-dark bg-secondary text-white wowIn fadeInUp';
// 		console.log($('#project1')[0].attributes[0]);
// 		console.log($('#project1')[0].attributes[0].nodeValue);
// 		console.log($('#project1')[0].attributes[0].textContent);
// 		console.log($('#project1')[0].attributes[0].value);
// 	} else {
// 		console.log('Something went wrong trying to change the class');
// 	}
// });

// $('#project2').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
// 	console.log($('#project2')[0].attributes[0]);
// 	console.log($('#project2')[0].attributes[0].nodeValue);
// 	console.log($('#project2')[0].attributes[0].textContent);
// 	console.log($('#project2')[0].attributes[0].value);
// 	// if (e.currentTarget.attributes[0].textContent === 'border border-dark bg-secondary text-white wowIn fadeInUp') {
// 	if ($('#project2')[0].attributes[0].nodeValue === 'border border-dark bg-secondary text-white wowIn fadeInUp') {
// 		// $('#project2').attr('class', 'border border-dark bg-secondary text-white wowOut fadeOut');
// 		$('#project2').removeClass('border border-dark bg-secondary text-white wowIn fadeInUp').addClass('border border-dark bg-secondary text-white wowOut fadeOut');
// 		console.log($('#project2')[0].attributes[0]);
// 		console.log($('#project2')[0].attributes[0].nodeValue);
// 		console.log($('#project2')[0].attributes[0].textContent);
// 		console.log($('#project2')[0].attributes[0].value);
// 	// } else if (e.currentTarget.attributes[0].textContent === 'border border-dark bg-secondary text-white wowOut fadeOut') {
// 	} else if ($('#project2').className === 'border border-dark bg-secondary text-white wowOut fadeOut') {
// 		// $('#project2').attr('class', 'border border-dark bg-secondary text-white wowIn fadeInUp');
// 		$('#project2').className = 'border border-dark bg-secondary text-white wowIn fadeInUp';
// 		console.log($('#project2')[0].attributes[0]);
// 		console.log($('#project2')[0].attributes[0].nodeValue);
// 		console.log($('#project2')[0].attributes[0].textContent);
// 		console.log($('#project2')[0].attributes[0].value);
// 	} else {
// 		console.log('Something went wrong trying to change the class');
// 	}
// });

// $('#project3').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
// 	console.log($('#project3')[0].attributes[0]);
// 	console.log($('#project3')[0].attributes[0].nodeValue);
// 	console.log($('#project3')[0].attributes[0].textContent);
// 	console.log($('#project3')[0].attributes[0].value);
// 	// if (e.currentTarget.attributes[0].textContent === 'border border-dark bg-secondary text-white wowIn fadeInUp') {
// 	if ($('#project3')[0].attributes[0].nodeValue === 'border border-dark bg-secondary text-white wowIn fadeInUp') {
// 		// $('#project3').attr('class', 'border border-dark bg-secondary text-white wowOut fadeOut');
// 		$('#project3').removeClass('border border-dark bg-secondary text-white wowIn fadeInUp').addClass('border border-dark bg-secondary text-white wowOut fadeOut');
// 		console.log($('#project3')[0].attributes[0]);
// 		console.log($('#project3')[0].attributes[0].nodeValue);
// 		console.log($('#project3')[0].attributes[0].textContent);
// 		console.log($('#project3')[0].attributes[0].value);
// 	// } else if (e.currentTarget.attributes[0].textContent === 'border border-dark bg-secondary text-white wowOut fadeOut') {
// 	} else if ($('#project3').className === 'border border-dark bg-secondary text-white wowOut fadeOut') {
// 		// $('#project3').attr('class', 'border border-dark bg-secondary text-white wowIn fadeInUp');
// 		$('#project3').className = 'border border-dark bg-secondary text-white wowIn fadeInUp';
// 		console.log($('#project3')[0].attributes[0]);
// 		console.log($('#project3')[0].attributes[0].nodeValue);
// 		console.log($('#project3')[0].attributes[0].textContent);
// 		console.log($('#project3')[0].attributes[0].value);
// 	} else {
// 		console.log('Something went wrong trying to change the class');
// 	}
// });








// $('#project2').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', changeAniTwo());
// $('#project3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', changeAniThree());

// $("#project1").on('shown.bs.collapse', function (e) {
// 	$(".fadeInUp").addClass("fadeOut");
// 	$(".fadeInUp").removeClass("fadeInUp");
// });

// wow2 = new WOW({
// 	boxClass: 'wow rotateIn',
// 	animateClass: 'animated',
// 	offset: 200,
// 	mobile: true,
// 	live: true
// })

// wow2.init();

// new WOW().init();

console.log('the optional js app file is done running');
