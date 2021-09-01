var myApp = angular.module("myModule", ["ngRoute"])
            .config(function ($routeProvider,$locationProvider)
            {
                $locationProvider.html5Mode(true);
                $routeProvider
                .when("/home", {
                    templateUrl: "Templates/home.html",
                    controller: "homeController"
                })
                .when("/courses", {
                    templateUrl: "Templates/courses.html",
                    controller: "coursesController"
                })
                .when("/students", {
                    templateUrl: "Templates/students.html",
                    controller: "studentsController"
                })
                .otherwise({
                    redirectTo: "/home"
                })
            })
            .controller("homeController", function ($scope) {
                $scope.message = "WELCOME";
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C#","JAVA","C","C++"]
            })
            .controller("studentsController", function ($scope, $http) {

                //$http.get("StudentService.asmx/GetAllStudents")
                //    .then(function (response) {
                //        $scope.students = response.data;
                //    })
            })