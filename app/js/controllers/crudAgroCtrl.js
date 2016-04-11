angular.module("CrudAgro")
    .controller("crudAgroCtrl", ['$scope', '$rootScope', function ($scope, $rootScope){
        $scope.control = "Crud Agro Control";
        $scope.user = {};

        $rootScope.action = "";

    }]);