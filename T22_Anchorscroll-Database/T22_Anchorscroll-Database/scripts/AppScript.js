var myApp = angular.module("myModule", []);

var myController = function ($scope,$http,$location,$anchorScroll) {
    $scope.message = "Hello Angular Test 11";
    $http.get("CountryService.asmx/GetData").then(function (response) {
        $scope.countries = response.data;

        $scope.scrollTo = function (countryName) {
            $location.hash(countryName);
            $anchorScroll();
        }
    });
}

myApp.controller("myController", myController);