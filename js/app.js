// configure AngularJS routing for Single Page Application functionality
var app = angular.module("mainApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
        resolve: {
         init: function() {
           $('.navbar-nav li').removeClass('active');
           $('#my-nav-home').addClass('active');
         }
       }
    })
    .when("/about", {
        templateUrl : "about.html",
        resolve: {
         init: function() {
           $('.navbar-nav li').removeClass('active');
           $('#my-nav-about').addClass('active');
         }
       }
    })
    .when("/resume", {
        templateUrl : "resume.html",
        resolve: {
         init: function() {
           $('.navbar-nav li').removeClass('active');
           $('#my-nav-resume').addClass('active');
         }
       }
    })
    .when("/projects", {
        templateUrl : "projects.html",
        resolve: {
         init: function() {
           $('.navbar-nav li').removeClass('active');
           $('#my-nav-projects').addClass('active');
         }
       }
    })
    .when("/articles", {
        templateUrl : "articles.html",
        resolve: {
         init: function() {
           $('.navbar-nav li').removeClass('active');
           $('#my-nav-articles').addClass('active');
         }
       }
    })
    .when("/articles/important-vs-urgent", {
        templateUrl : "articles/important-vs-urgent.html"
    })
    .when("/articles/the-productivity-equation", {
        templateUrl : "articles/the-productivity-equation.html"
    })
    .when("/articles/the-importance-of-rest", {
        templateUrl : "articles/the-importance-of-rest.html"
    })
    .when("/articles/triage", {
        templateUrl : "articles/triage.html"
    })
    .when("/articles/holistic-learning", {
        templateUrl : "articles/holistic-learning.html"
    })
    .when("/articles/spaced-repetition", {
        templateUrl : "articles/spaced-repetition.html"
    })
    .when("/articles/conquering-the-pace-of-university-learning", {
        templateUrl : "articles/conquering-the-pace-of-university-learning.html"
    })
    .when("/articles/analysis-paralysis", {
        templateUrl : "articles/analysis-paralysis.html"
    })
    .when("/articles/my-personal-exam-study-system", {
        templateUrl : "articles/my-personal-exam-study-system.html"
    })
    .when("/articles/knowing-new-possibilities", {
        templateUrl : "articles/knowing-new-possibilities.html"
    })
    .when("/articles/we-are-more-creative-when-solving-other-peoples-problems", {
        templateUrl : "articles/we-are-more-creative-when-solving-other-peoples-problems.html"
    })
    .when("/articles/fixed-vs-growth-mindset", {
        templateUrl : "articles/fixed-vs-growth-mindset.html"
    });
});
app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

// Other
u = atob('QWRtYnB4bWJ2cG1PdlJIYnBGV2I=').split('').reverse().join('');
d = atob('c3RhbmZvcmQuZWR1');
send = atob(u)+d;
