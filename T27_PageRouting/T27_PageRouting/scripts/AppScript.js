var myApp = angular.module("Demo", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                //controller: "homeController as homeCtrl"
                controller: "homeController",
                controllerAs: "homeCtrl"
            })
            .when("/courses", {
                templateUrl: "Templates/courses.html",
                //controller: "coursesController as coursesCtrl"
                controller: "coursesController",
                controllerAs: "coursesCtrl"
            })
            .when("/students", {
                templateUrl: "Templates/students.html",
                //controller: "studentsController as studentCtrl"
                controller: "studentsController",
                controllerAs: "studentCtrl"
            })
            .when("/students/:id", {
                templateUrl: "Templates/studentDetails.html",
                //controller: "studentDetailsController as studentDetailsCtrl"
                controller: "studentDetailsController",
                controllerAs: "studentDetailsCtrl"
            })
            .otherwise({
                redirectTo:"/home"
            })
            
    })
    .controller("homeController", function () {
        this.message = "welcome message";
    })
    .controller("coursesController", function () {
        this.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("studentsController", function ($http) {
        //StudentService.asmx/GetAllStudents
        var vm = this;
        $http.get("StudentService.asmx/GetAllStudents")
                            .then(function (response) {
                                vm.students = response.data;
        })
    })
    .controller("studentDetailsController", function ($http, $routeParams) {
        var vm = this;
        $http({
            url: "StudentService.asmx/GetStudent",
            method: "get",
            params: { id: $routeParams.id }
        })
        .then(function (response) {
            vm.student = response.data;
        }, function (reason) {
            console.log(reason)
        })
    })