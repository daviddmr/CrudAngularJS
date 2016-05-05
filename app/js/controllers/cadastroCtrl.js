angular.module("CrudAngularJS")
    .controller("cadastroCtrl", ['$scope', '$http', '$routeParams', '$mdDialog', function ($scope, $http, $routeParams, $mdDialog){
        $scope.control = "Cadastro Control";

        $scope.action = $routeParams.action;

        $scope.someoneSelected = function (users) {
            return users.some(function (user) {
                return user.selected;
            });
        };
        var aux;
        var getUser = function(id){
            $http.get("http://localhost:8080/Restful/user/listarUm?id="+id).success(function (data, status) {
                data.birthday = new Date(data.birthday);
                $scope.user = data;
                aux = angular.copy($scope.user);
                console.log($scope.user);
            });
        };

        if($scope.action === 'Editar'){
            $scope.title = "Edição de usuário";
            $scope.titleOfButton = "Editar";
            $scope.titleOfClearButton = "Desfazer alterações";
            getUser($routeParams.id);
        }else{
            $scope.user = {};
            $scope.title = "Cadastro de novo usuário";
            $scope.titleOfButton = "Salvar";
            $scope.titleOfClearButton = "Limpar campos";
        }

        var showAlert = function(msg) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    //.clickOutsideToClose(true)
                    .title('Aviso')
                    .textContent(msg)
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Ok!')
                    //.targetEvent(ev)
            );
        };

        $scope.addUpdateUser = function(user) {
            if($scope.action === 'Editar'){
                console.log("Calling update post");
                $http({
                        method: 'POST',
                        url: "http://localhost:8080/Restful/user/update",
                        data: user
                    }
                ).then(function successCallback(response, data, status) {
                    console.log("Success Response = "+response+ " Status = "+status+" Data: "+data);
                    showAlert('Usuário editado com sucesso');
                }, function errorCallback(response, data, status) {
                    console.log("Error Response = "+response+ " Status = "+status+" Data: "+data);
                });
            }else{
                console.log("Calling insert post");
                $http({
                        method: 'POST',
                        url: "http://localhost:8080/Restful/user/add",
                        data: user
                    }
                ).then(function successCallback(response, data, status) {
                    console.log("Success Response = "+response+ " Status = "+status+" Data: "+data);
                    $scope.user = {};
                    window.location = "#/lista";
                    showAlert('Usuário cadastrado com sucesso')
                }, function errorCallback(response, data, status) {
                    console.log("Error Response = "+response+ " Status = "+status+" Data: "+data);
                });
            }
        };

        $scope.clearForm = function(form) {
            if($scope.action === 'Editar'){
                $scope.user = angular.copy(aux);
            }else{
                if (form) {
                    $scope.user = {};
                    //form.$setPristine();
                    form.$setUntouched();
                }
            }
        };

        $scope.states = ('AC AL AP AM BA CE DF ES GO MA MT MS MG PA PB PR PE PI RJ RN RS RO RR SC ' +
        'SP SE TO').split(' ').map(function(state) {
            return {abbrev: state};
        });
    }]);