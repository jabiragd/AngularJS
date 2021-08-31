var myApp = angular.module("myModule", ["ngRoute"])
            .config(function ($routeProvider) {
                $routeProvider
                .when({
                    templateUrl: "Templates/home.html",
                    controller:"homeController"
                })
                .when({
                    templateUrl: "Templates/courses.html",
                    controller:"coursesController"
                })
                .when({
                    templateUrl: "Templates/students.html",
                    controller: "studentsController"
                })
            })
            .controller("homeController", function ($scope) {
                $scope.message = "WELCOME";
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C#","JAVA","VB","KOTLIN"];
            })
            .controller("studentsController", function ($scope,$http) {
                $http.get("").then(function (response) {
                    $scope.students = response.data;
                })
            })

