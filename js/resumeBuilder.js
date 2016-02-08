/*
Create Objects (in JSON format) that will hold information to build resume
*/

//Declare bio object: contains biographical information
var bio = {
	'name': "",
	'role': "",
	'contacts': {
		'mobile': "",
		'email': "",
		'github': "",
		'twitter': "",
		'location': ""
	},
	'welcomeMessage': "",
	'skills': [],
	'biopic': ""
};

//Add display method to bio object
bio.display = function(){};

//Declare education object: contains list of schools and online courses
var education = {
	'schools': [
		{
			'name': "",
			'degree': "",
			'majors': [],
			'date': 1992,
			'location': "",
			'url': ""
		}
	],
	'onlineCourses': [
		{
			'title': "",
			'school': "",
			'date': 2016,
			'url': ""
		}
	]
};

//Add display method to education object
var education.display = function(){};


//Declare work object: contains list of employers and positions held
var work = {
	'jobs': [
		{
			'employer': "",
			'title': "",
			'location': "",
			'dates': "",
			'description': ""
		}
	]
};

//Add display method to work object
work.display = function(){};


//Declare project object: contains list of projects
var projects = {
	'projects': [
		{
			'title': "",
			'dates': "",
			'description': "",
			'images': []
		}
	]
};

//Add display method to project object
projects.display = function(){};


//Add information to index.html
bio.display();
education.display();
work.display();
projects.display();

//Add interactive map to index.html
$("#mapDiv").append(googleMap);



