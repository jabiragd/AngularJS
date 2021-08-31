var myApp = angular.module("Demo", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
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
            .when("/students/:id", {
                templateUrl: "Templates/studentDetails.html",
                controller: "studentDetailsController"
            })
            .otherwise({
                redirectTo:"/home"
            })
            
    })
    .controller("homeController", function ($scope) {
        $scope.message = "welcome message";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("studentsController", function ($scope, $http) {
        //StudentService.asmx/GetAllStudents
        $http.get("StudentService.asmx/GetAllStudents")
                            .then(function (response) {
                                $scope.students = response.data;
        })
    })
    .controller("studentDetailsController", function ($scope, $http, $routeParams) {
        $http({
            url: "StudentService.asmx/GetStudent",
            method: "get",
            params: { id: $routeParams.id }
        })
        .then(function (response) {
            $scope.student = response.data;
        }, function (reason) {
            console.log(reason)
        })
    })