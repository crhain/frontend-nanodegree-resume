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
	
	//Add Name and title
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	//Add contacts - by iterating through contacts object and adding them one by one
	for(index in bio.contacts) {
		//Note: could add values to an Array and then sort alphabetically to ensure some order
		if(bio.contacts.hasOwnProperty(index)) {	//this checks to see if property belongs only to this obj
			var contact = index.slice(0, 1).toUpperCase() + index.slice(1);
			var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
			formattedContact = formattedContact.replace("%data%", bio.contacts[index]);
			$("#topContacts").append(formattedContact);	
			$("#footerContacts").append(formattedContact);
		}
	
	}

	//Add Picture and Message
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	//Add skills
	$("#header").append(HTMLskillsStart);

	for(var i = 0; i < bio.skills.length; i++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));			
	}
	
	
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


//Declare work object: contains list of employers and positions held
var work = {
	"jobs": [
		{
			"employer": "Me, Inc.",
			"title": "Grand Master",
			"location": "Palatine, IL",
			"dates": "2009 - Present",
			"description": "I do whatever I want.",
			"url": ""
		},
		{
			"employer": "Zurich N.A. Insurance",
			"title": "Marketing Research Analyst",
			"location": "Schaumburg, IL",
			"dates": "1998 - 2009",
			"description": "Marketing research stuff.  Very interesting.",
			"url": "https://www.zurichna.com/"
		}


	]
};

//Add display method to work object
work.display = function(){

	for(var i = 0; i < work.jobs.length; i++) {
		var formattedWorkEntry = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

		if(work.jobs[i].url) {
				formattedWorkEntry = formattedWorkEntry.replace("#", work.jobs[i].url);
			}

		formattedWorkEntry += " " + HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedWorkEntry);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));	
	}
	
	/*
	var HTMLworkStart = '<div class="work-entry"></div>';
	var HTMLworkEmployer = '<a href="#">%data%';
	var HTMLworkTitle = ' - %data%</a>';
	var HTMLworkDates = '<div class="date-text">%data%</div>';
	var HTMLworkLocation = '<div class="location-text">%data%</div>';
	var HTMLworkDescription = '<p><br>%data%</p>';
	*/
};


//Declare project object: contains list of projects
var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": "January 2016",
			"description": "A portfolio website using HTML5 and CSS",
			"url": "",
			"images": []
		}
	]
};

//Add display method to project object
projects.display = function(){
	for(var i = 0; i < projects.projects.length; i++) {	
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);

		if(projects.projects[i].url) {
				formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[i].url);
			}


		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));

		if(projects.projects.images) {
			for(var image = 0; image < projects.projects[i].images.length; image++) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[image]));		
			}	
		}
				
	}
	/*
	var HTMLprojectStart = '<div class="project-entry"></div>';
	var HTMLprojectTitle = '<a href="#">%data%</a>';
	var HTMLprojectDates = '<div class="date-text">%data%</div>';
	var HTMLprojectDescription = '<p><br>%data%</p>';
	var HTMLprojectImage = '<img src="%data%">';
	*/
};


//Declare education object: contains list of schools and online courses
var education = {
	"schools": [
		{
			"name": "Dominican University",
			"degree": "MS",
			"majors": "Library & Information Science",
			"date": 1998,
			"location": "River Forest, IL",
			"url": "http://www.dom.edu/"
		},
		{
			"name": "Colorado State University",
			"degree": "BA",
			"majors": "English",
			"date": 1993,
			"location": "Fort Collins, CO",
			"url": "http://www.online.colostate.edu/"
		}
	],
	"onlineCourses": [
			{
			"title": "Front-End Developer Nano Degree",
			"school": "Udacity",
			"date": 2016,
			"url": "https://www.udacity.com/"
		}
	]
};

//Add display method to education object
education.display = function(){
	for(var i = 0; i < education.schools.length; i++) {
		var formattedSchoolEntry = HTMLschoolName.replace("%data%", education.schools[i].name);
		if(education.schools[i].url) {
			formattedSchoolEntry = formattedSchoolEntry.replace("#", education.schools[i].url);	
		}
		
		formattedSchoolEntry += HTMLschoolDegree.replace("%data%", education.schools[i].degree);


		$("#education").append(HTMLschoolStart);

		$(".education-entry:last").append(formattedSchoolEntry);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].date));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));	
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
	}

	if(education.onlineCourses.length > 0){
		$("#education").append(HTMLonlineClasses);

		for(var i = 0; i < education.onlineCourses.length; i++) {
			var formattedOnlineEntry = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);

			if(education.onlineCourses[i].url) {
				formattedOnlineEntry = formattedOnlineEntry.replace("#", education.onlineCourses[i].url);
			}

			formattedOnlineEntry += HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedOnlineEntry);
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].date));			
	}


	
}


	/*
	var HTMLschoolStart = '<div class="education-entry"></div>';
	var HTMLschoolName = '<a href="#">%data%';
	var HTMLschoolDegree = ' -- %data%</a>';
	var HTMLschoolDates = '<div class="date-text">%data%</div>';
	var HTMLschoolLocation = '<div class="location-text">%data%</div>';
	var HTMLschoolMajor = '<em><br>Major: %data%</em>';

	var HTMLonlineClasses = '<h3>Online Classes</h3>';
	var HTMLonlineTitle = '<a href="#">%data%';
	var HTMLonlineSchool = ' - %data%</a>';
	var HTMLonlineDates = '<div class="date-text">%data%</div>';
	var HTMLonlineURL = '<br><a href="#">%data%</a>';
*/

};




//Add information to index.html
bio.display();
work.display();
projects.display();
education.display();



//Add interactive map to index.html
$("#mapDiv").append(googleMap);



