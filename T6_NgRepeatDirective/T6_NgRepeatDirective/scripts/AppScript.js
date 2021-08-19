var myApp = angular.module("myModule", []);

var myController = function ($scope) {
    var employees = [
        { firstName: "TestF1", lastName: "TestL1", gender: "Male" },
        { firstName: "TestF2", lastName: "TestL2", gender: "Female" },
        { firstName: "TestF3", lastName: "TestL3", gender: "Male" },
        { firstName: "TestF4", lastName: "TestL4", gender: "Female" }
    ];

    $scope.employees = employees;
}

myApp.controller("myController", myController);