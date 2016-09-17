var bio = {
    "name": "Slim wang",
    "role": "Front-end Ninja",
    "contacts": {
        "mobile": "18631499402",
        "email": "netbot@vip.qq.com",
        "github": "slimwang",
        "location": "Beijing,China"
    },
    "welcomeMessage": "When you only have a hammer, everything looks like a nail.",
    "skills": ["Ruby on Rails", "JavaScript"],
    "biopic": "images/biopic.jpg",
    display: function() {
        // display name
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        var formattedSkill_1 = HTMLskills.replace("%data%", bio.skills[0]);
        var formattedSkill_2 = HTMLskills.replace("%data%", bio.skills[1]);

        $("#header").prepend(formattedName, formattedRole, formattedMessage, formattedBiopic);


        $("#topContacts", "#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

        $("#header").append(HTMLskillsStart);
        if (bio.skills.length > 0) {
            bio.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        }
    }
};
bio.display();

var education = {
    "schools": [{
        "name": "Hebei University of Technology",
        "location": "Hebei University Of Technology, Tianjin,China",
        "degree": "BA",
        "majors": ["Chemistry"],
        "dates": "2014-2018",
        "url": "http://www.hebut.edu.cn/"
    }],
    "onlineCourses": [{
        "title": "Front-end nanodegree",
        "school": "Udacity",
        "dates": "2016-2016",
        "url": "https://www.udacity.com/",
    }],
    display: function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolName + formattedDegree, formattedDates, formattedSchoolLocation,  formattedMajor);
        });

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
        });

    }
};
education.display();


var work = {
    "jobs": [{
        "employer": "HEBUT",
        "title": "Deputy director of Grade Management Committee",
        "location": "Hebei University Of Technology, Tianjin,China",
        "dates": "2014-2018",
        "description": "Leader of a student self-management organization."
    }, {
        "employer": "HEBUT",
        "title": "Monitor of Materials Chemistry Class",
        "location": "Hebei University Of Technology, Tianjin,China",
        "dates": "2014-2018",
        "description": "The Monitor of my class."
    }],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedHTMLworkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle, formattedHTMLworkLocation, formattedHTMLworkDates, formattedHTMLworkDescription);
        });
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "CET4-6 Crawler",
        "dates": "Feb 21, 2016",
        "description": "A simple crawler written in ruby that can crawl cet4-6 grades.",
        "images": ["images/crawler.png"],
    }],
    display: function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
            if (project.images.length > 0) {
                project.images.forEach(function(image) {
                  var formattedImage = HTMLprojectImage.replace("%data%", image);
                  $(".project-entry:last").append(formattedImage);
                });
            }
        });
    }
};
projects.display();



// googleMap
$("#mapDiv").append(googleMap);
