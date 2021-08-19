var module = angular.module("myModule", []);

var myController = function ($scope) {
    $scope.message = "WELCOME TO ANGULAR JS";
}

module.controller("myController", myController)