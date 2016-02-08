/*
Create Objects (in JSON format) that will hold information to build resume
*/

//Declare bio object: contains biographical information
var bio = {
	"name": "Carl Hain",
	"role": "Web Developer",
	"contacts": {
		"mobile": "224-848-2205",
		"email": "crhain@gmail.com",
		"github": "crhain",
		"twitter": "Comming Soon!",
		"location": "Palatine, IL"
	},
	"welcomeMessage": "Welcome to my interactive resume!",
	"skills": ["JavaScript", "Python", "HTML/CSS"],
	"biopic": "https://scontent.ford1-1.fna.fbcdn.net/hprofile-prn2/v/t1.0-1/p160x160/555095_10201237456002684_1558476731_n.jpg?oh=95105c9f4374904ef31c24b075b3cd7d&oe=57361B26"
};

//Add display method to bio object
bio.display = function(){
	
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	/*
	HTMLheaderName = '<h1 id="name">%data%</h1>';
	HTMLheaderRole = '<span>%data%</span><hr>';

	HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
	HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
	HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
	HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
	HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
	HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
	HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

	HTMLbioPic = '<img src="%data%" class="biopic">';
	HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

	HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
	HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
	*/
};

//Declare education object: contains list of schools and online courses
var education = {
	"schools": [
		{
			"name": "",
			"degree": "",
			"majors": [],
			"date": 1992,
			"location": "",
			"url": ""
		}
	],
	"onlineCourses": [
		{
			"title": "",
			"school": "",
			"date": 2016,
			"url": ""
		}
	]
};

//Add display method to education object
education.display = function(){};


//Declare work object: contains list of employers and positions held
var work = {
	"jobs": [
		{
			"employer": "",
			"title": "",
			"location": "",
			"dates": "",
			"description": ""
		}
	]
};

//Add display method to work object
work.display = function(){};


//Declare project object: contains list of projects
var projects = {
	"projects": [
		{
			"title": "",
			"dates": "",
			"description": "",
			"images": []
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



