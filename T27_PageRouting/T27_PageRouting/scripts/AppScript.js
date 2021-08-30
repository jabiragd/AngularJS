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
            
    })
    .controller("homeController", homeController)
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("studentsController", function ($scope, $http) {
        $http.get("StudentService.asmx/GetAllStudents")
                            .then(function (response) {
                                $scope.students = response.data;
                            })
    })
        //.controller("homeController", homeController)
        //.controller("coursesController", coursesController)
        //.controller("studentsController", studentsController)


var homeController = function ($scope) {
    $scope.message = "WELCOME TUTORIAL";
}

var coursesController = function ($scope) {
    $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
}

var studentsController = function ($scope,$http) {
    
}
