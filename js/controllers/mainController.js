app.controller('mainController', function($scope, $http, $sce){
    $scope.contents = null;
    $scope.artefactIcons = {
        'Paper': 'fa fa-file',
        'Presentation': 'fa fa-file',
        'Video': 'fa fa-video-camera',
        'Github': 'fa fa-github'
    };
    $http.get('projects.json').
        then(
            function(data, status, headers, config){
            $scope.contents = data.data.projects;
            }, function(data, status, headers, config){
    });
    $scope.trust = $sce.trustAsHtml;
})