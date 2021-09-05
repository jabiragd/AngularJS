/// <reference path="angular-ui-router.js" />
/// <reference path="angular.min.js" />
/// <reference path="C:\Users\JabirAgd\Documents\AngularJS\T46_UIRouterPart2\T46_UIRouterPart2\Templates/courses.html" />
var myApp = angular.module("myApp", ["ui.router"])
            .config(function ($stateProvider, $urlMatcherFactoryProvider,$urlRouterProvider,$locationProvider) {

                $urlMatcherFactoryProvider.caseInsensitive(true);
                $urlRouterProvider.otherwise("/home");
                $locationProvider.html5Mode(true);

                $stateProvider
                .state("courses", {
                    url: "/courses",
                    templateUrl: "Templates/courses.html",
                    controller: "coursesController",
                    data: {
                        customData1: "Courses State Custom Data 1",
                        customData2: "Courses State Custom Data 2"
                    }
                })
                .state("home", {
                    url: "/home",
                    templateUrl: "Templates/home.html",
                    controller: "homeController",
                    data: {
                        customData1: "Home State Custom Data 1",
                        customData2: "Home State Custom Data 2"
                    }
                })
                .state("studentParent", {
                    url: "/studentParent",
                    templateUrl: "Templates/studentParent.html",
                    controller: "studentParentController"
                })
                .state("studentParent.students", {
                    url: "/",
                    templateUrl: "Templates/students.html",
                    controller: "studentController"
                })
                .state("studentParent.studentDetail", {
                    url: "/:id",
                    templateUrl: "Templates/studentDetail.html",
                    controller: "studentDetailController"
                })
            })
            .controller("homeController", function ($scope,$state) {
                $scope.message = "welcome";

                $scope.homeCustomData1 = $state.current.data.customData1;
                $scope.homeCustomData2 = $state.current.data.customData2;

                $scope.coursesCustomData1 = $state.get("courses").data.customData1;
                $scope.coursesCustomData2 = $state.get("courses").data.customData2;
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C", "C++", "JAVA", "KOTLIN"];
            })
            .controller("studentController", function ($scope,$http) {
                $http.get("StudentService.asmx/GetAllStudents").then(function (response) {
                    $scope.students = response.data;
                })
            })
            .controller("studentDetailController", function ($scope,$stateParams,$http) {
                $http({
                    url: "StudentService.asmx/GetStudent",
                    method: "get",
                    params: { id: $stateParams.id }
                }).then(function (response) {
                    $scope.student = response.data;
                });
            })
              .controller("studentParentController", function ($scope, $http) {
                  $http.get("StudentService.asmx/GetStudentTotals").then(function (response) {
                      var studentTotals = response.data;
                      $scope.males = studentTotals.males;
                      $scope.females = studentTotals.females;
                      $scope.total = studentTotals.total
                  })
              })