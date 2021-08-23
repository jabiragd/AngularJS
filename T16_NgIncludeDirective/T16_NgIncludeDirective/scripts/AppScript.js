var myApp = angular.module("myModule", []);

var myController = function ($scope) {

    $scope.message = "Angular Test 16";

    var employees = [
               { name: "Ben", gender: "Male", salary: 55000 },
               { name: "Sara", gender: "Female", salary: 68000 },
               { name: "Mark", gender: "Male", salary: 57000 },
               { name: "Pam", gender: "Female", salary: 53000 },
               { name: "Todd", gender: "Male", salary: 60000 }
    ];

    $scope.employees = employees;
    $scope.employeeView = "EmployeeTable.html"
}

myApp.controller("myController", myController);