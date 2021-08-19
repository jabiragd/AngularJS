var myApp = angular.module("myModule", []);

var myController = function ($scope) {
    var employee = {
        firstName: 'JABIR',
        lastName: 'AGD',
        gender  : 'MALE'
    };

    $scope.employee = employee;
}

myApp.controller("myController", myController);