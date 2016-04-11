angular.module("CrudAgro")
    .controller("cadastroCtrl", function ($scope, $http){
        $scope.control = "Cadastro Control";
        $scope.user = {};

        $scope.addUser = function(user) {
            user.id = 12;
            $http.post("http://localhost:3412/users", user).success(function (data) {
                delete $scope.user;
                //loadUsersListFromBackNode();
                console.log("Adicionou");
                $scope.user = {};
                 //$scope.contatos.push(contato); //adiciona o contato que foi incluso na chamada do post
                // $scope.contatos.push(data); //adiciona o contato que é o retorno da operação de post
            });

        };

        $scope.clearForm = function(form) {
            if (form) {
                $scope.user = {};
                //form.$setPristine();
                form.$setUntouched();
            }
        };

        $scope.states = ('AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC ' +
        'SP SE TO').split(' ').map(function(state) {
            return {abbrev: state};
        });
    });