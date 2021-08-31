//var myApp = angular.module("myModule", [])
//            .controller("countryController", function ($scope) {
//                $scope.name = "India";
//            })
//            .controller("stateController", function ($scope) {
//                $scope.name = "TamilNadu";
//            })
//            .controller("cityController", function ($scope) {
//                $scope.name = "Chennai";
//            });

var myApp = angular.module("myModule", [])
            .controller("countryController", function () {
                this.name = "India";
            })
            .controller("stateController", function () {
                this.name = "TamilNadu";
            })
            .controller("cityController", function () {
                this.name = "Chennai";
            });