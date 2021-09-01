var myApp = angular.module("myModule", ["ngRoute"])
            .config(function ($routeProvider, $locationProvider) {
                $locationProvider.html5Mode(true);
                $routeProvider
                .when("/home",{
                    templateUrl: "Templates/home.html",
                    controller: "homeController",
                    controllerAs: "homeCtrl",
                    caseInsensitiveMatch:true
                })
                .when("/courses",{
                    templateUrl: "Templates/courses.html",
                    controller: "coursesController",
                    controllerAs: "coursesCtrl",
                    caseInsensitiveMatch:true
                })
                .when("/students",{
                    templateUrl: "Templates/students.html",
                    controller: "studentsController",
                    controllerAs: "studentCtrl",
                    caseInsensitiveMatch:true
                })
                .when("/studentSearch/:name?", {
                    templateUrl: "Templates/studentsSearch.html",
                    controller: "studentsSearchController",
                    controllerAs: "studentsSearchCtrl"
                })
                .otherwise({
                    redirectTo: "/home"
                })
            })
            .controller("homeController", function () {
                this.message = "WELCOME";
            })
            .controller("coursesController", function () {
                this.courses = ["C#", "JAVA", "VB", "KOTLIN"];
            })
            .controller("studentsSearchController", function ($http,$routeParams) {

                var vm = this;
                $http({
                    url: "StudentService.asmx/GetStudentsByName",
                    method: "get",
                    params:{name:$routeParams.name}
                })
                .then(function (response) {
                    vm.students = response.data;
                })
            })
            .controller("studentsController", function ($http,$route,$scope,$log,$location) {
                var vm = this;

                this.reloadData = function () {
                    $route.reload();
                }

                this.studentSearch = function () {
                    if (vm.name) {
                        $location.url("/studentSearch/" + vm.name)
                    } else {
                        $location.url("/studentSearch/")
                    }
                }


                //$scope.$on("$routeChangeStart", function (event, next, current) {
                //    if (!confirm("Are you sure you want to navigate away from this page")) {
                //        event.preventDefault();
                //    }
                //})


                //$scope.$on("$routeChangeStart", function (event, next, current) {
                //    if (!confirm("Are you sure you want to navigate away from this page to " + next.$$route.originalPath)) {
                //        event.preventDefault();
                //    }
                //})

                //$scope.$on("$locationChangeStart", function (event, next, current) {
                //    if (!confirm("Are you sure you want to navigate away from this page to " + next)) {
                //        event.preventDefault();
                //    }
                //})

                //$rootScope.$on("$locationChangeStart", function () {
                //    $log.debug("$locationChangeStart fired");
                //    console.log("$locationChangeStart fired");
                //});

                //$rootScope.$on("$routeChangeStart", function () {
                //    $log.debug("$routeChangeStart fired");
                //    console.log("$routeChangeStart fired");
                //});

                //$rootScope.$on("$locationChangeSuccess", function () {
                //    $log.debug("$locationChangeSuccess fired");
                //    console.log("$locationChangeSuccess fired");
                //});

                //$rootScope.$on("$routeChangeSuccess", function () {
                //    $log.debug("$routeChangeSuccess fired");
                //    console.log("$routeChangeSuccess fired");
                //});

                $scope.$on("$locationChangeStart", function () {
                    $log.debug("$locationChangeStart fired");
                    console.log("$locationChangeStart fired");
                });

                $scope.$on("$routeChangeStart", function () {
                    $log.debug("$routeChangeStart fired");
                    console.log("$routeChangeStart fired");
                });

                $scope.$on("$locationChangeSuccess", function () {
                    $log.debug("$locationChangeSuccess fired");
                    console.log("$locationChangeSuccess fired");
                });

                $scope.$on("$routeChangeSuccess", function () {
                    $log.debug("$routeChangeSuccess fired");
                    console.log("$routeChangeSuccess fired");
                });

               
                $http.get("StudentService.asmx/GetAllStudents").then(function (response) {
                    vm.students = response.data;
                })

            })

