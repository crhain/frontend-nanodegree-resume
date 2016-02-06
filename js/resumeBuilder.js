/*
This is empty on purpose! Your code to build the resume will go here.
 */



var bio = {
	"name": "Carl Hain",
	"role": "Web Developer",
	"contact": {
		"mobile": "1-866-333-5695",
		"email":"crhain@gmail.com",
		"twitter": "None",
		"github": "https://github.com/crhain",
		"blog": "None",
		"location": "Chicago, IL"
				},
	"picture": "https://scontent.ford1-1.fna.fbcdn.net/hprofile-prn2/v/t1.0-1/p160x160/555095_10201237456002684_1558476731_n.jpg?oh=95105c9f4374904ef31c24b075b3cd7d&oe=57361B26",
	"message": "Hello World!",
	"skills":[
				"HTML/CSS", 
				"JavaScript", 
				"Python"]
};





var work = {
		"employer":
		[
			{
				"name":"Me Inc",
				"title": "Grand Wizard",
				"dates": "2009 - Present",
				"description": "Various projects and activities."
			},
			{
				"name":"Zurich Insurance",
				"title": "Marketing Research Analyst",
				"dates": "1998-2009",
				"description": "Insurance and marketing research type stuff."
			}
		]

		};
		
var projects = {
	"projects":
	[
		{
			"name": "Interactive Resume",
			"description": "An interactive resume written in javaScript.",
			"url": "crhain",
			"date": 2016
		}

	]

}; 

var education = {
 	"school": 
 	[
 		{
 			"name": "Dominican University",
 			"city": "River Forest, IL",
 			"date": 1998,
 			"degree": "MS",
 			"major": "Library & Information Science",
 			"url": ""
 		},
 		{
 			"name": "Colorado State University",
 			"city": "Fort Collins, CO",
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

/*
$("body").append(education.school[0].name);
$("body").append("<br>" + education.online[1].name);
$("body").append("<br>" + work.employer[0].name);
*/




 