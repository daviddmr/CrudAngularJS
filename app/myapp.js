angular.module('myapp', [])
    .controller('MyCtrl', ['$scope', function MyCtrl($scope) {
        $scope.greeting = "hello";
    }]);