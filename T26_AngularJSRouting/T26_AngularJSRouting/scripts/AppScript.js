//var myModule = angular.module("myModule", ["ngRoute"]);

//myModule.config(function ($rootProvider) {
//    $rootProvider
//        .when("/home",{
//            templateUrl: "Templates/home.html",
//            controller:"homeController"
//        })
//        .when("/courses", {
//            templateUrl: "Templates/courses.html",
//            controller: "coursesController"
//        })
//        .when("/students", {
//            templateUrl: "Templates/students.html",
//            controller: "studentsController"
//        })
//        .controller("homeController", function ($scope) {
//            $scope.message = "Home Page";
//        })
//        .controller("coursesController", function ($scope) {
//            $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
//        })
//        .controller("studentsController", function ($scope, $http) {
           
//            $http.get("StudentService.asmx/GetAllStudents").then(function (response) {
//                $scope.students = response.data;
//            })

//        });
//})
var app = angular
            .module("Demo", ["ngRoute"])
            .config(function ($routeProvider,$locationProvider) {
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
                    .when("/students/:id", {
                        templateUrl: "Templates/studentDetails.html",
                        controller: "studentDetailsController"
                    })
                    //.otherwise({
                     //   redirectTo:"/home"
                    //})
                //$locationProvider.html5Mode(true);
            })
            .controller("homeController", function ($scope) {
                $scope.message = "Home Page";
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
            })
            .controller("studentsController", function ($scope, $http) {
                $http.get("StudentService.asmx/GetAllStudents",{cache: true})
                .then(function (response) {
                    $scope.students = response.data;
                })
            })
            .controller("studentDetailsController", function ($scope, $http, $routeParams) {
                $http({
                    url: "StudentService.asmx/GetStudent",
                    method: "get",
                    params: { id: $routeParams.id }
                }).then(function (response) {
                    $scope.student = response.data;
                })
          
            })
