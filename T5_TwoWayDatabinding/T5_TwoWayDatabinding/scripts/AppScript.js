var myApp = angular.module("myModule", []);

var myController = function ($scope) {
    
    var employee = {
        firstName: "John",
        lastName: "Ben",
        gender : "Male"
    };

    $scope.employee = employee;
}

myApp.controller("myController", myController);