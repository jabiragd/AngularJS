var myApp = angular.module("myModule", []);

var myController = function ($scope) {

    var technologies = [
        { name: "C#", likes: 0, dislikes: 0 },
        { name: "ASP.NET", likes: 0, dislikes: 0 },
        { name: "SQL", likes: 0, dislikes: 0 },
        { name: "AngularJS", likes: 0, dislikes: 0 }
    ];
    $scope.technologies = technologies;

    $scope.incrementLikes = function (technology) {
        technology.likes++;
    }

    $scope.increamentDislikes = function (technology) {
        technology.dislikes++;
    }
}

myApp.controller("myController", myController);