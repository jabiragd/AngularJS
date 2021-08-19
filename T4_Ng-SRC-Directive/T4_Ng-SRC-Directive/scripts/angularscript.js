var myApp = angular.module("myModule", []);

var myController = function ($scope) {
    var countryDetail = {
        countryName: "India",
        capital: "Delhi",
        flag: '/image/flag.png'
    };
    $scope.countryDetail = countryDetail;
}

myApp.controller("myController", myController);
