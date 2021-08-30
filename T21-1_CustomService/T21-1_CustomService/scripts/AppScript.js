var myApp = angular.module("myModule", []);

var myController = function ($scope, HttpGETService) {
    $scope.message = "Angular Test 20_1";
    HttpGETService.getHttpRespose("EmployeeService.asmx/GetAllEmployees").then(function (response) {
        $scope.employees = response.data;
    });
}

myApp.service("HttpGETService", function ($http) {
    this.getHttpRespose = function (url) {
        return $http.get(url, { cache: false });
    }
});

myApp.controller("myController", myController);