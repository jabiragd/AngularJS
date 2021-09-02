var myApp = angular.module("myApp", ["ui.router"])
            .config(function ($stateProvider) {
                $stateProvider
                    .state("home", {
                        url: "/home",
                        templateUrl: "Templates/home.html",
                        controller: "homeController"
                    })
                    .state("courses", {
                        url: "/courses",
                        templateUrl: "Templates/courses.html",
                        controller: "coursesController"
                    }).state("students", {
                        url: "/students",
                        templateUrl: "Templates/students.html",
                        controller: "studentsController"
                    })
                    .state("studentDetail", {
                        url: "/students/:id",
                        templateUrl: "Templates/studentDetail.html",
                        controller: "studentDetailController"
                    })
                    .state("studentSearch", {
                        url: "/studentSearch/:name",
                        templateUrl: "Templates/studentSearch.html",
                        controller: "studentSearchController"
                    })
            })
            .controller("homeController", function ($scope) {
                $scope.message = "WELCOME TUTORIAL";
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C", "C++", "JAVA", "KOTLIN"];
            })
            .controller("studentsController", function ($scope, $http, $state) {

                $scope.studentSerach = function () {
                    if ($scope.name) {
                        console.log("step 1 : " + $scope.name);
                        $state.go("studentSearch", { name: $scope.name });
                    } else {
                        console.log("step 2 : " );
                        $state.go("studentsSearch");
                    }
                }

                $http.get("StudentService.asmx/GetAllStudents").then(function (response) {
                    $scope.students = response.data;
                })
            })
            .controller("studentDetailController", function ($scope,$http,$stateParams) {

                $http({
                    url: "StudentService.asmx/GetStudent",
                    method: "get",
                    params:{id:$stateParams.id}
                }).then(function (response) {
                    $scope.student = response.data;
                })

            })
            .controller("studentSearchController", function ($scope,$http, $stateParams) {
                if($stateParams.name){

                    $http({
                        url: "StudentService.asmx/GetStudentByName",
                        method: "get",
                        params: { name: $stateParams.name }
                    }).then(function (response) {
                        $scope.students = response.data;
                    })

                } else {
                    $http.get("StudentService.asmx/GetStudent").then(function (respose) {
                        $scope.students = response.data;
                    })
                }
            })