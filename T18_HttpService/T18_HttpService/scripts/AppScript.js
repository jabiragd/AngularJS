var myApp = angular.module("myModule", []);

var myController = function ($scope,$http) {
    $scope.message = "angular test 19";
    //$http({
    //    method: 'GET',
    //    url: 'EmployeeService.asmx/GetAllEmployees'
    //}).then(function (response) {
    //    $scope.employees = response.data;
    //}, function (reason) {
    //    $scope.error = reason.data;
    //});

    var successCallback = function (response) {
        $scope.employees = response.data;
    };

    var errorCallback = function (response) {
        $scope.error = response.data;
    };

    $http({
        method: 'GET',
        url: 'EmployeeService.asmx/GetAllEmployees'
    }).then(successCallback, errorCallback);



}

myApp.controller("myController", myController);