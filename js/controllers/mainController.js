app.controller('mainController', function($scope, $http, $sce){

    $scope.artefactIcons = {
        /*'Paper': 'fa fa-file',
        'Presentation': 'fa fa-file',
        'Video': 'fa fa-video',
        'GitHub': 'fab fa-github',*/
        'Paper': 'https://img.shields.io/badge/PDF-See_Presentation-darkred?logo=adobe-acrobat-reader',
        'Presentation': 'https://img.shields.io/badge/PDF-See_Presentation-darkred?logo=adobe-acrobat-reader',
        'Video': 'https://img.shields.io/badge/YouTube-View_On_YouTube-red?logo=YouTube',
        'GitHub': 'https://img.shields.io/badge/GitHub-View_On_GitHub-blue?logo=GitHub',
        'All': 'fa fa-list',
        'Data Science': 'fa fa-brain',
        'Optimization': 'fa fa-calculator',
        'Web Development': 'fa fa-laptop-code',
        'Entrepreneurship': 'fa fa-lightbulb'
    };

    $scope.trust = $sce.trustAsHtml;

    // Get contents, tags and tag categories
    $scope.contents = null;
    $scope.tags = [];
    $http.get('projects.json').
        then(
            function(data, status, headers, config){
                // Get contents
                $scope.contents = data.data.projects;
                // Get tags
                for (project of $scope.contents) {
                    for (tag of project.tags) {
                        if ($scope.tags.indexOf(tag) == -1) {
                            $scope.tags.push(tag);
                        }
                    }
                }
            }, function(data, status, headers, config){
    });

    $scope.tagCategoriesDict = {
        'Data Science': ['Data Science', 'Machine Learning', 'Data Visualization'],
        'Optimization': ['Operations Research', 'Mathematical Optimization', 'Operations Analytics', 'Theory of Constraints'],
        'Web Development': ['Web Development'],
        'Entrepreneurship': ['Entrepreneurship','Lean Launchpad','Customer Discovery']
    }

    $scope.tagCategories = ['All'].concat(Object.keys($scope.tagCategoriesDict));

    $scope.tagCategoriesComparator = function(actual, expected) { return actual == 'All' || expected.indexOf(actual) != -1 }

})