angular.module("CrudAgro")
    .controller("cadastroCtrl", function ($scope){
        $scope.control = "Cadastro Control";
        $scope.user = {};
        $scope.clearUsers = function(){
            $scope.user = {};
            $scope.userForm.$setPristine();
        };

        $scope.states = ('AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC ' +
        'SP SE TO').split(' ').map(function(state) {
            return {abbrev: state};
        });
    });