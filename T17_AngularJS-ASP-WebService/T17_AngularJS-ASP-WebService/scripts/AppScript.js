var myApp = angular.module("myModule", []);

var myController = function ($scope,$http) {
    //$scope.message = "Test angular 17";
             //EmployeeService.asmx/GetAllEmployee
    $http.get("EmployeeService.asmx/GetAllEmployee")
    .then(function (response) {
        $scope.employees = response.data;
    });
}

myApp.controller("myController", myController);