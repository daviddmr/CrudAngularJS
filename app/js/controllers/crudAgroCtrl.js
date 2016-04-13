angular.module("CrudAgro")
    .controller("crudAgroCtrl", ['$scope', '$rootScope', '$mdSidenav', function ($scope, $rootScope, $mdSidenav){
        $scope.control = "Crud Agro Control";
        $scope.user = {};

        $rootScope.action = "";

        $scope.openLeftMenu = function() {
            console.log("asd");
            $mdSidenav('left').toggle();
        };

    }]);