var myApp = angular.module("myModule", []);

var myController = function ($scope) {
    var employees = [
           {
               name: "Ben", dateOfBirth: new Date("November 23, 1980"),
               gender: "Male", salary: 55000
           },
           {
               name: "Sara", dateOfBirth: new Date("May 05, 1970"),
               gender: "Female", salary: 68000
           },
           {
               name: "Mark", dateOfBirth: new Date("August 15, 1974"),
               gender: "Male", salary: 57000
           },
           {
               name: "Pam", dateOfBirth: new Date("October 27, 1979"),
               gender: "Female", salary: 53000
           },
           {
               name: "Todd", dateOfBirth: new Date("December 30, 1983"),
               gender: "Male", salary: 60000
           }
    ];

    $scope.employees = employees;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        console.log('step 1 : sortData() ' + column + ' : sortColumn ' + $scope.sortColumn)
        $scope.reverseSort = ($scope.sortColumn == column) ?
            !$scope.reverseSort : false;
        $scope.sortColumn = column;
        console.log('step 1 : sortData() ' + column + ' : sortColumn ' + $scope.sortColumn)
    }

    $scope.getSortClass = function (column) {
        console.log('step 1:  getSortClass() ' + column)
        if ($scope.sortColumn == column) {
            return $scope.reverseSort
              ? 'arrow-down'
              : 'arrow-up';
        }
        console.log('step 2 : getSortClass() ' + $scope.reverseSort)
        return '';
    }

}

myApp.controller("myController", myController);