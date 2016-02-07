/*
This is empty on purpose! Your code to build the resume will go here.
 */



var bio = {
	"name": "Carl Hain",
	"role": "Web Developer",
	"contacts": {
		"mobile": "1-866-333-5695",
		"email":"crhain@gmail.com",
		"twitter": "None",
		"github": "https://github.com/crhain",
		"blog": "None",
		"location": "Palatine, IL"
				},
	"picture": "https://scontent.ford1-1.fna.fbcdn.net/hprofile-prn2/v/t1.0-1/p160x160/555095_10201237456002684_1558476731_n.jpg?oh=95105c9f4374904ef31c24b075b3cd7d&oe=57361B26",
	"message": "Hello World!",
	"skills":[
				"HTML/CSS", 
				"JavaScript", 
				"Python"]
};


var work = {
		"jobs":
		[
			{
				"name":"Me Inc",
				"title": "Grand Wizard",
				"dates": "2009 - Present",
				"location": "Palatine, IL",
				"description": "Various projects and activities."
			},
			{
				"name":"Zurich Insurance",
				"title": "Marketing Research Analyst",
				"dates": "1998-2009",
				"location": "Schaumburg, IL",
				"description": "Insurance and marketing research type stuff."
			}
		]

		};
		
var projects = {
	"projects":
	[
		{
			"title": "Portfolio Page",
			"dates": "2016",
			"description": "A purty lookin' 'folio page made with some of that html and css stuff. Could use some more work though.",
			"image": ""
		},
		{
			"title": "Interactive Resume",
			"dates": "2016",
			"description": "An interactive resume written in javaScript.",
			"image": ""
			
		}

	]

}; 


projects.display = function() {

	for(var i=0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", 
			projects.projects[i].description));	
		if(projects.projects[i].image.length > 0) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].image));
		}
	}
	
}


var education = {
 	"schools": 
 	[
 		{
 			"name": "Dominican University",
 			"location": "River Forest, IL",
 			"date": 1998,
 			"degree": "MS",
 			"major": "Library & Information Science",
 			"url": ""
 		},
 		{
 			"name": "Colorado State University",
 			"location": "Fort Collins, CO",
 			"date": 1993,
 			"degree": "BA",
 			"major": "English",
 			"url": ""
 		}
 	],
 	"online": 
 	[
 		{
 			"name": "Udacity",
 			"class": "Intro to Computer Science",
 			"years": 2015,
 			"url": ""
 		},
 		{
 			"name": "Udacity",
 			"class": "Front-End Developer Nano Degree",
 			"years": 2016,
 			"url": ""
 		}
 	]
 };



if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

}

//Lesson 3 For loops

var displayWork = function() {
	for(var i = 0; i < work.jobs.length; i++){
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].name);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location))

		var formattedWorkDates =  HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkDescription);

	}
}


//Add internationlizer function
var inName = function (name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];	
}

//Append internationalizer button
$("#main").append(internationalizeButton);

//internationalizer test
console.log(inName("sebastian thrun") === "Sebastian THRUN");

//Display some stuff
displayWork();

projects.display(projects);


$(document).click(function(loc){
	logClicks(loc.pageX, loc.pageY);
});


$("#mapDiv").append(googleMap);

/*
$("body").append(education.school[0].name);
$("body").append("<br>" + education.online[1].name);
$("body").append("<br>" + work.employer[0].name);
*/




 