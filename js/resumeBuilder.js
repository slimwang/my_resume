// var awesomeThoughts = "I am Slim Wang and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);
var formattedName = HTMLheaderName.replace("%data%", "Slim Wang");
// var formattedRole = HTMLheaderRole.replace("%data%", "Front-end Ninja");
$("#header").append(formattedName);
// $("#header").append(formattedRole);
// $("#main").prepend(bio.skills);

var work = {
  "jobs": [
    {
      "employer": "HEBUT",
      "title": "deputy director of Grade Management Committee",
      "location": "Tianjin,China",
      "dates": "in progress",
      "description": "leader of a student self-management organization."
  }
  ]
};

var projects = {
  projects: [
    {
      "title": "",
      "dates": "",
      "description": ""
    }
  ]
};

var bio = {
    "name": "Slim wang",
    "role": "Front-end Ninja",
    "welcomeMessage": "When you only have a hammer, everything looks like a nail.",
    "biopic": "",
    "contacts": {
      "mobile": 18631499402,
      "email": "netbot@vip.qq.com",
      "github": "slimwang",
      "location": "Tianjin,China"
    },
    "pictureURL": "http://media0.giphy.com/media/OXlhM4wei4HcI/200_s.gif",
    "skills": ["Ruby on Rails", "JavaScript"]
};

var education = {
    "schools": [{
        "name": "Hebei University of Technology",
        "location": "Tianjin,China",
        "degree": "BA",
        "major": ["Chemistry"],
        "dates": 2018,
        "url": "http://www.hebut.edu.cn/"
    }],
    "onlineCourses": [{
        "title": "Front-end nanodegree",
        "school": "Udacity",
        "datas": 2016,
        "ulr": "https://www.udacity.com/"
    }]
};

if(bio.skills){
  $("#header").append(HTMLskillsStart);
  var fortmattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(fortmattedSkill);
  fortmattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(fortmattedSkill);
}

for(var job in work.jobs){
  $("#workExperience").append(HTMLworkStart);

  var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  $(".work-entry:last").append(formattedHTMLworkEmployer);
  var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  $(".work-entry:last").append(formattedHTMLworkTitle);
  var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedHTMLworkLocation);
  var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedHTMLworkDates);
  var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedHTMLworkDescription);
}
