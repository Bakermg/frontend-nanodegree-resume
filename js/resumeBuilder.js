

var bio = { 
	"name" : "Mike Baker",
	"role" : "Web Developer",
	"welcomeMessage" : "A Little Bit About Me. I am a Motorcycle Tech looking for a new challenge, the logic of troubleshooting and repairing motorcycles is very similiar to Web development in that following and developing algorithms is key to accurately troubleshooting  and repairing these machines ",
	"skills" : ["Html/CSS", "Javascript", "Python", "Ruby"],
	"contacts" : {
			"email" : "bakermg@me.com",
			"mobile" : "954-410-XXXX",
			"twitter" : "bakermg",
			"github" : "bakermg",
			"location" : "Ft Lauderdale FL"
		},
	"biopic" : "images/headphoto.jpg",
	display : function () {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

	
	$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			if (bio.skills.length > 0) {
			$("#skills:last").append(HTMLskills.replace("%data%", bio.skills[skill]));
					}
		}
	}
}

var work = {
	"jobs" : [
	
	{"position": "Tech",
	 "employer": "Honda",
	 "location" : " Weston Florida",
	 "dates" : "2007-Present",
	 "description" : "Shop Foreman, troubleshooting and repairing"
		},
	{"position" : "Tech",
	"employer" : "Powersports",
	"location" : "Ft Lauderdale Florida",
	"dates" : "2001-2007",
	"description" : "Shop Foreman, troubleshooting and repairing"	
		},
	{"position" : "Tech",
	"employer" : "Cylce Concepts",
	"location" : "Miami Florida",
	"dates" : " 1997-2001",
	"description" : "Managed Shop and Oversee all Operations"
		},
	{"position" : "Tech",
	"employer" : "Choppers INC",
	"location" : "Miami Florida",
	"dates" : "1995-1997",
	"description" : "Custom buit Motorcycles"
		}
	],
	display : function(){
    for (job in work.jobs) {
 		$("#workExperience").append(HTMLworkStart);

 	 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 	 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
 	 	var formattedEmployerTitle = formattedEmployer + formattedTitle;
 	 
 	 	$(".work-entry:last").append(formattedEmployerTitle);

 	 	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 	 	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
 	 	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkDescription); 	 
 }
}
}

var education = {
	"schools" : [
	{"name" : "Penn State University",
	"location" : "State College PA",
	"degree" :"Associate",
	"majors" : ["Electrical Engineering"],
	"dates" : "1989",
	"url" : "www.pennstate.com"
		},
	{"name" : "Musicians Institute",
	"location" : "Hollywood CA",
	"degree" :"Associate",
	"majors" : ["Music Theory, Performance"],
	"dates" : "1991",
	"url" : "www.musiciansinstitute.com"
		}
		],
	"onlineCourses" : [
	{"title" : "An Inroduction to Interactive Programming in Python",
	"school" : "Rice University",
	"dates" : "2014",
	"url" : "https://www.coursera.org/account/accomplishments/certificate/MJAYWNNZN3"
		},
	{"title" : "Web Application Architectures",
	"school" : "University of New Mexico",
	"dates" : "2014",
	"url" : "https://www.coursera.org/account/accomplishments/certificate/MCDG9FWEYE"
		},
	{"title" : ["HTML5 Structure, Syntax, and Semantics"," Javascript for Web Designers "," Javascript Essentail Training"," CSS Fundamentals"," HTML Essentail Training"],
	"school" : "lynda.com",
	"dates" : "2015",
	"url" : "http://www.lynda.com/AllCertificates/User/4575564"
		}
	],
	displaySchools : function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) +
			HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	}
},
	displayOnline : function() {
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) +
			HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
	}
}
}

var projects = {
	"projects" : [
	{"title" : "JSON Template",
	"dates" : "2014",
	"description" : "Building with JSON and Javascript",
	"images" : ["https://placeimg.com/200/150/arch", "https://placeimg.com/200/150/tech"]
		},
    {"title" : "Template Resume",
	"dates" : "2014",
	"description" : "Building with JSON and Javascript",
	"images" : ["https://placeimg.com/200/150/tech/grayscale", "https://placeimg.com/200/150/people/grayscale"]
		}       
	],

	display : function(){
 	for (project in projects.projects) {
 		$("#projects").append(HTMLprojectStart);
 		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
 		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
 		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
 		$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[0]));
 		$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[1]));
 	} 

 }
}

bio.display();
work.display();
projects.display();
education.displaySchools();
education.displayOnline();

$("#map-div").append(googleMap);
$("#main").append(internationalizeButton);
	

function inName(name) {
	name = bio.name.trim().split(" ");
	name[name.length - 1] = name[name.length - 1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLocaleLowerCase();
	return name[0] + " " + name[name.length - 1];
}


