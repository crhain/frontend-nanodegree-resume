/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Carl Hain",
	"role": "Web Developer",
	"contact": {
		"mobile": "1-866-333-5695",
		"email":"crhain@gmail.com",
		"twitter": "",
		"github": "https://github.com/crhain",
		"blog": "",
		"location": "Chicago, IL"
				},
	"picture": "https://scontent.ford1-1.fna.fbcdn.net/hprofile-prn2/v/t1.0-1/p160x160/555095_10201237456002684_1558476731_n.jpg?oh=95105c9f4374904ef31c24b075b3cd7d&oe=57361B26",
	"message": "Hello World!",
	"skills": ["HTML/CSS", 
				"JavaScript", 
				"Python"]
};

var work = {};

work.position = "Grand Wizard";
work.employer = "Me inc";
work.years = "2009 - Present";
work.city = "Palatine, IL";


var education = {
	"schools":[
		{
			"name":"Colorado State University",
			"city":"Fort Collins",
			"state": "CO",
			"years": "1989-1993",
			"major": "English",
			"minor": "",
			"online": ""
		},
		{
			"name":"Udacity",
			"city":"Online",
			"state": "",
			"years": "2015-Present",
			"major": "",
			"minor": "",
			"online":["Intro To Computer Science", "Front-End Developer Nano Degree"]
		
		}

	]

};

education["name"] = "Colorado State University";
education["years"] = "1989 - 1993";
education["city"] = "Fort Collins, CO";




 //Format Header - Name & title
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 


//var formattedSkills = HTMLskills.replace




$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


//Format & Append Header - Skills

//Format & Append Header - Generic Contact
var formattedContact = HTMLcontactGeneric.replace("%contact%", "Mobile");
formattedContact = formattedContact.replace("%data%", bio.contact.mobile);

$("#topContacts").append(formattedContact);


var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);

$("#header").append(formattedPicture);
$("#header").append(formattedMessage);

$("#header").append(HTMLskillsStart);


//Format & Append Work History
//$("workExperience").append(HTMLworkStart);
$("#main").append(work.position);

//Format & Append Education History
$("#main").append(education.schools[1].name);


 
//Format & Append Footer Contacts
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
//$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
//$("#topContacts").append(formattedBlog);
$("#footerContacts").append(formattedLocation);





 
 
 
