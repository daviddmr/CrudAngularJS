angular.module("CrudAngularJS")
    .controller("crudAngularJSCtrl", ['$scope', '$rootScope', '$mdSidenav', function ($scope, $rootScope, $mdSidenav){
        $scope.control = "Crud AngularJS Control";
        $scope.user = {};

        $rootScope.action = "";

        $scope.openLeftMenu = function() {
            console.log("asd");
            $mdSidenav('left').toggle();
        };

    }]);