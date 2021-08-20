var myApp = angular.module("myModule", []);

var myController = function ($scope) {
    $scope.message = "Open Angular JS";


    var employees = [
               {
                   name: "1_Ben", dateOfBirth: new Date("November 23, 1980"),
                   gender: "Male", salary: 55000.788
               },
               {
                   name: "2_Sara", dateOfBirth: new Date("May 05, 1970"),
                   gender: "Female", salary: 68000
               },
               {
                   name: "3_Mark", dateOfBirth: new Date("August 15, 1974"),
                   gender: "Male", salary: 57000
               },
               {
                   name: "4_Pam", dateOfBirth: new Date("October 27, 1979"),
                   gender: "Female", salary: 53000
               },
               {
                   name: "5_Todd", dateOfBirth: new Date("December 30, 1983"),
                   gender: "Male", salary: 60000
               }
    ];

    $scope.employees = employees;
    $scope.rowCount = 3;
}

myApp.controller("myController", myController);