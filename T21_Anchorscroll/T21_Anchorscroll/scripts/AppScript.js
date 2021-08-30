var myApp = angular.module("myModule", []);

var myController = function ($scope, $location, $anchorScroll) {
    $scope.message = "Angular test 11";

    $scope.scrollTo = function (scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll.yOffset = 100;
        $anchorScroll();
    }
}

myApp.controller("myController", myController);