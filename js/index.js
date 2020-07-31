// configure AngularJS routing for Single Page Application functionality
var app = angular.module("myApp", ["ngRoute"]);

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
    });
});
app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

// Other
u = atob('QWRtYnB4bWJ2cG1PdlJIYnBGV2I=').split('').reverse().join('');
d = atob('c3RhbmZvcmQuZWR1');
send = atob(u)+d;
