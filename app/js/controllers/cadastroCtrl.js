angular.module("CrudAgro")
    .controller("cadastroCtrl", ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){
        $scope.control = "Cadastro Control";

        $scope.action = $routeParams.action;

        var getUser = function(){
            var id = 1;
            $http.get("http://localhost:8080/Restful/user/listarUm?id="+id).success(function (data, status) {
                data.birthday = new Date(data.birthday);
                $scope.user = data;
                console.log($scope.user);
                $scope.operadoras = data;
            });
        };

        if($scope.action === 'Editar'){
            $scope.title = "Edição de usuário";
            getUser();
        }else{
            $scope.title = "Cadastro de novo usuário";
        }

        $scope.addUser = function(user) {
            console.log(user);
            console.log("1 - Nome = "+ user.firstName+ " Sobrenome = " +user.lastName);
            if(user.firstName == null){
                user.firstName = "Armando";
            }
            if(user.lastName == null){
                user.lastName = "Teste";
            }
            console.log("2 - Nome = "+ user.firstName+ " Sobrenome = " +user.lastName);
            $http.post("http://localhost:8080/Restful/user/add", user.firstName, user.lastName).success(function (data, status) {
                delete $scope.user;
                //loadUsersListFromBackNode();
                console.log("Success Response = "+data+ " Status = "+status);
                //$scope.user = {};
                 //$scope.contatos.push(contato); //adiciona o contato que foi incluso na chamada do post
                // $scope.contatos.push(data); //adiciona o contato que é o retorno da operação de post
            }).error(function (data, status){
                console.log("Error Response = "+data+ " Status = "+status);
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
    }]);