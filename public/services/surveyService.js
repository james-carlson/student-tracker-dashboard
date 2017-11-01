angular.module('app').service('surveyService', function ($http) {

  this.getWeeklySurveyData = () => {
    return $http.get('/api/surveys/getWeekly')
  }

  this.getWeeklySurveyDataByCohortId = (cohort_id) => {
    return $http.get(`/api/surveys/getWeeklyById?id=${cohort_id}`)
  }

  this.getWeeklyCommentsByCohortId = (cohort_id) => {
    return $http.get(`/api/surveys/getCommentsById?comment=all&id=${cohort_id}`)
  }

  this.getSurveyByTopic = (topic) => {
    return $http.get(`/api/surveys/getSurveyByTopic?topic=${topic}`)
  }

  this.getInstructors = () => {
    return $http.get('/api/surveys/instructors')
  }

 
this.instructorSurveys = [{
  "instructorId": "59f8d79f6ce02767109b8446",
  "subtopic": "w-2.1",
  "topic": "Javascript",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Missy Beutler",
  "cohort": "WPR15",
  "prepared": 5,
  "explain": 5,
  "overall": 5,
  "date": "2016-11-17T20:08:27.596Z"
}, {
  "instructorId": "59f8d79f6ce02767109b8446",
  "subtopic": "w-2.1",
  "topic": "React",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Missy Beutler",
  "cohort": "WPR15",
  "prepared": 4,
  "explain": 4,
  "overall": 5,
  "date": "2016-11-17T20:08:27.596Z"
}, {
  "instructorId": "59f8d79f6ce02767109b8446",
  "subtopic": "w-2.1",
  "topic": "React",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Missy Beutler",
  "cohort": "WPR15",
  "prepared": 5,
  "explain": 5,
  "overall": 5,
  "date": "2016-11-17T20:08:27.596Z"
}, {
  "instructorId": "59f8d79f6ce02767109b8446",
  "subtopic": "w-2.1",
  "topic": "React",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Missy Beutler",
  "cohort": "WPR15",
  "prepared": 4,
  "explain": 5,
  "overall": 5,
  "date": "2016-11-17T20:08:27.596Z"
}, {
  "instructorId": "59f8d79f6ce02767109b8446",
  "subtopic": "w-2.1",
  "topic": "React",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Missy Beutler",
  "cohort": "WPR15",
  "prepared": 5,
  "explain": 4,
  "overall": 5,
  "date": "2016-11-17T20:08:27.596Z"
}, {
  "instructorId": "59f8d79f6ce02767109b8446",
  "subtopic": "w-2.1",
  "topic": "React",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Missy Beutler",
  "cohort": "WPR15",
  "prepared": 3,
  "explain": 3,
  "overall": 3,
  "date": "2016-11-17T20:08:27.596Z"
}, {
  "instructorId": "59f8d79f6ce02767109b8446",
  "subtopic": "w-2.1",
  "topic": "React",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Missy Beutler",
  "cohort": "WPR15",
  "prepared": 5,
  "explain": 4,
  "overall": 3,
  "date": "2016-11-17T20:08:27.596Z"
}, {
  "instructorId": "59f8d79f6ce02767109b8446",
  "subtopic": "w-2.1",
  "topic": "Javascript",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Missy Beutler",
  "cohort": "WPR15",
  "prepared": 3,
  "explain": 5,
  "overall": 5,
  "date": "2016-11-17T20:08:27.596Z"
}, {
  "instructorId": "59f8d79f6ce02767109b8446",
  "subtopic": "w-2.1",
  "topic": "React",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Missy Beutler",
  "cohort": "WPR15",
  "prepared": 3,
  "explain": 3,
  "overall": 3,
  "date": "2016-11-17T20:08:27.596Z"
}, {
  "instructorId": "59f8d79f6ce02767109b8446",
  "subtopic": "w-2.1",
  "topic": "React",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Missy Beutler",
  "cohort": "WPR15",
  "prepared": 5,
  "explain": 5,
  "overall": 5,
  "date": "2016-11-17T20:08:27.596Z"
}, {
  "instructorId": "59f24cb377f2691d80dab8c9",
  "subtopic": "w-2.1",
  "topic": "React",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Brack Carmony",
  "cohort": "WPR14",
  "prepared": 4,
  "explain": 5,
  "overall": 4,
  "date": "2016-10-31T18:00:32.553Z"
}, {
  "instructorId": "59f24cb377f2691d80dab8c9",
  "subtopic": "w-2.1",
  "topic": "React",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Brack Carmony",
  "cohort": "WPRAsync",
  "prepared": 4,
  "explain": 4,
  "overall": 4,
  "date": "2016-12-14T20:50:04.823Z"
}, {
  "instructorId": "59f24cb377f2691d80dab8c9",
  "subtopic": "w-2.1",
  "topic": "Javascript",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Brack Carmony",
  "cohort": "WPRAsync",
  "prepared": 5,
  "explain": 5,
  "overall": 5,
  "date": "2016-12-14T20:50:04.823Z"
}, {
  "instructorId": "59f24cb377f2691d80dab8c9",
  "subtopic": "w-2.1",
  "topic": "React",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Brack Carmony",
  "cohort": "WPRAsync",
  "prepared": 4,
  "explain": 4,
  "overall": 4,
  "date": "2016-12-14T20:50:04.823Z"
}, {
  "instructorId": "59f24cb377f2691d80dab8c9",
  "subtopic": "w-2.1",
  "topic": "React",
  "campus": "Provo, UT",
  "program": "webdev",
  "format": "Immersive",
  "instructor": "Brack Carmony",
  "cohort": "WPRAsync",
  "prepared": 4,
  "explain": 4,
  "overall": 4,
  "date": "2016-12-14T20:50:04.823Z"
}]

  this.topics = [{
    "cohortId": 74,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Jason Staten",
    "cohort": "WPR15",
    "prepared": 5,
    "explain": 5,
    "overall": 5,
    "date": "2016-11-17T20:08:27.596Z"
  }, {
    "cohortId": 74,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Jason Staten",
    "cohort": "WPR15",
    "prepared": 4,
    "explain": 4,
    "overall": 5,
    "date": "2016-11-17T20:08:27.596Z"
  }, {
    "cohortId": 74,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Jason Staten",
    "cohort": "WPR15",
    "prepared": 5,
    "explain": 5,
    "overall": 5,
    "date": "2016-11-17T20:08:27.596Z"
  }, {
    "cohortId": 74,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Jason Staten",
    "cohort": "WPR15",
    "prepared": 4,
    "explain": 5,
    "overall": 5,
    "date": "2016-11-17T20:08:27.596Z"
  }, {
    "cohortId": 74,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Jason Staten",
    "cohort": "WPR15",
    "prepared": 5,
    "explain": 4,
    "overall": 5,
    "date": "2016-11-17T20:08:27.596Z"
  }, {
    "cohortId": 74,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Jason Staten",
    "cohort": "WPR15",
    "prepared": 3,
    "explain": 3,
    "overall": 3,
    "date": "2016-11-17T20:08:27.596Z"
  }, {
    "cohortId": 74,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Jason Staten",
    "cohort": "WPR15",
    "prepared": 5,
    "explain": 4,
    "overall": 3,
    "date": "2016-11-17T20:08:27.596Z"
  }, {
    "cohortId": 74,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Jason Staten",
    "cohort": "WPR15",
    "prepared": 3,
    "explain": 5,
    "overall": 5,
    "date": "2016-11-17T20:08:27.596Z"
  }, {
    "cohortId": 74,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Jason Staten",
    "cohort": "WPR15",
    "prepared": 3,
    "explain": 3,
    "overall": 3,
    "date": "2016-11-17T20:08:27.596Z"
  }, {
    "cohortId": 74,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Jason Staten",
    "cohort": "WPR15",
    "prepared": 5,
    "explain": 5,
    "overall": 5,
    "date": "2016-11-17T20:08:27.596Z"
  }, {
    "cohortId": 88,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Kendall Buchanan",
    "cohort": "WPR14",
    "prepared": 4,
    "explain": 5,
    "overall": 4,
    "date": "2016-10-31T18:00:32.553Z"
  }, {
    "cohortId": 89,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Kendall Buchanan",
    "cohort": "WPRAsync",
    "prepared": 4,
    "explain": 4,
    "overall": 4,
    "date": "2016-12-14T20:50:04.823Z"
  }, {
    "cohortId": 89,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Kendall Buchanan",
    "cohort": "WPRAsync",
    "prepared": 5,
    "explain": 5,
    "overall": 5,
    "date": "2016-12-14T20:50:04.823Z"
  }, {
    "cohortId": 89,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Kendall Buchanan",
    "cohort": "WPRAsync",
    "prepared": 4,
    "explain": 4,
    "overall": 4,
    "date": "2016-12-14T20:50:04.823Z"
  }, {
    "cohortId": 89,
    "campus": "Provo, UT",
    "program": "webdev",
    "format": "Immersive",
    "instructor": "Kendall Buchanan",
    "cohort": "WPRAsync",
    "prepared": 4,
    "explain": 4,
    "overall": 4,
    "date": "2016-12-14T20:50:04.823Z"
  }]

})