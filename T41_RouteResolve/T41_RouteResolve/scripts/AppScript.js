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
                .when("/students/:id", {
                    templateUrl: "Templates/studentDetails.html",
                    controller: "studentDetailsController"
                })
                .when("/studentsSearch/:name?",{
                    templateUrl: "Templates/studentsSearch.html",
                    controller: "studentsSearchController"
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
            .controller("studentsController", function ($scope, $http,$location) {

                $scope.studentSearch = function () {
                    console.log("studentSearch")
                    if ($scope.name) {
                        $location.url("/studentsSearch/" + $scope.name)
                    } else {
                        $location.url("/studentsSearch/")
                    }
                }

                $http.get("StudentService.asmx/GetAllStudents")
                    .then(function (response) {
                        $scope.students = response.data;
                    })
            })
            .controller("studentDetailsController", function ($scope, $http, $routeParams) {
                $http({
                    url: "StudentService.asmx/GetStudent",
                    method: "get",
                    params: { id: $routeParams.id}
                }).then(function (response) {
                    $scope.student = response.data;
                })
            })
            .controller("studentsSearchController", function ($scope, $http, $routeParams) {

                if($routeParams.name){
                    $http({
                        url: "StudentService.asmx/GetStudentsByName",
                        method: "get",
                        params: { name: $routeParams.name }
                    }).then(function (response) {
                        $scope.students = response.data;
                    })
                } else {
                    $http.get("StudentService.asmx/GetAllStudents")
                    .then(function (response) {
                        $scope.students = response.data;
                    })
                }
            })