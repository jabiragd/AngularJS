var myApp = angular.module("myModule", []);

var myController = function ($scope) {
    $scope.message = "Angular Test 12"

    var employees = [
               { name: "Ben", gender: "Male", salary: 55000, city: "London" },
               { name: "Bnt", gender: "Male", salary: 55000, city: "Chennai" },
               { name: "Btn", gender: "Male", salary: 55000, city: "Mumbai" },
               { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
               { name: "Mark", gender: "Male", salary: 57000, city: "London" },
               { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },
               { name: "Todd", gender: "Male", salary: 60000, city: "London" },
    ];

    $scope.employees = employees;

}

myApp.controller("myController", myController);