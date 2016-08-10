// var awesomeThoughts = "I am Slim Wang and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);
// var formattedRole = HTMLheaderRole.replace("%data%", "Front-end Ninja");
// $("#header").append(formattedRole);
// $("#main").prepend(bio.skills);

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
        // $("#header").prepend(formattedName);
        // $("#header").append(formattedMessage);
        // $("#header").append(formattedBiopic);


        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        // $("#topContacts").append(formattedEmail);
        // $("#topContacts").append(formattedGithub);
        // $("#topContacts").append(formattedLocation);

        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        // $("#footerContacts").append(formattedEmail);
        // $("#footerContacts").append(formattedGithub);
        // $("#footerContacts").append(formattedLocation);


        // $("#skills").append(formattedSkill_1);
        // $("#skills").append(formattedSkill_2);

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
        "major": ["Chemistry"],
        "dates": "2014-2018",
        "url": "http://www.hebut.edu.cn/"
    }],
    "onlineCourses": [{
        "title": "Front-end nanodegree",
        "school": "Udacity",
        "dates": "2016-2016",
        "url": "https://www.udacity.com/",
        // "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    display: function() {
        // shcools
        // for (var school in education.schools) {
        //     $("#education").append(HTMLschoolStart);
        //
        //     var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
        //     var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        //     var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        //     var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        //     var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        //
        //     $(".education-entry:last").append(formattedSchoolName);
        //     $(".education-entry:last").append(formattedSchoolLocation);
        //     $(".education-entry:last").append(formattedDegree);
        //     $(".education-entry:last").append(formattedMajor);
        //     $(".education-entry:last").append(formattedDates);
        // }
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolName + formattedDegree, formattedDates, formattedSchoolLocation,  formattedMajor);
        });

        // onlineCourses
        // for (var course in education.onlineCourses) {
        // $("#education").append(HTMLschoolStart);
        // $(".education-entry:last").append(HTMLonlineClasses);
        // var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        // var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        // var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        // var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        // $(".education-entry:last").append(formattedOnlineTitle);
        // $(".education-entry:last").append(formattedOnlineSchool);
        // $(".education-entry:last").append(formattedOnlineDates);
        // $(".education-entry:last").append(formattedOnlineURL);
        // }
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
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
        // for (var job in work.jobs) {
        // $("#workExperience").append(HTMLworkStart);
        //
        // var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        // $(".work-entry:last").append(formattedHTMLworkEmployer);
        // var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        // $(".work-entry:last").append(formattedHTMLworkTitle);
        // var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        // $(".work-entry:last").append(formattedHTMLworkLocation);
        // var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        // $(".work-entry:last").append(formattedHTMLworkDates);
        // var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        // $(".work-entry:last").append(formattedHTMLworkDescription);
        // }
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
    projects: [{
        "title": "CET4-6 Crawler",
        "dates": "Feb 21, 2016",
        "description": "A simple crawler written in ruby that can crawl cet4-6 grades.",
        "images": ["images/crawler.png"],
    }],
    display: function() {
        // for (var project in projects.projects) {
        //     $("#projects").append(HTMLprojectStart);
        //
        //     var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        //     $(".project-entry:last").append(formattedTitle);
        //     var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        //     $(".project-entry:last").append(formattedDates);
        //     var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        //     $(".project-entry:last").append(formattedDescription);
        // }
        //
        // if (projects.projects[project].images.length > 0) {
        //     for (var image in projects.projects[project].images) {
        //         var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        //         $(".project-entry:last").append(formattedImage);
        //     }
        // }
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
            if (project.images.length > 0) {
                for (var image in project.images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", project.images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        });
    }
};
projects.display();



// googleMap
$("#mapDiv").append(googleMap);
