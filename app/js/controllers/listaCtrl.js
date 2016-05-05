angular.module("CrudAngularJS")
    .controller("listaCtrl", function ($scope, $http, $mdDialog){
        $scope.control = "Lista Control";
        $scope.users = [];

        var loadUsersList = function () {
            $http.get("http://localhost:8080/Restful/user/listarTodos"
            ).success(function (data, status) {
                console.log(data);
                $scope.users = data.map(function(el) {
                    Object.keys(el).forEach(function(key) {
                        if(el[key]=="null" || el[key]=="undefined") {
                            delete el[key];
                        }
                    });

                    el.id = parseInt(el.id, 10);
                    if(el.birthday) {
                        el.birthday = new Date(el.birthday);
                    }
                    return el;
                });
            }).error(function (data, status) {
                $scope.message = "Aconteceu um problema: "+ data;
            });
        };

        $scope.refatoringTelephoneFormat = function(telephone){
          return '('+telephone.substring(0, 2)+') '+telephone.substring(2, 6)+'-'+telephone.substring(6, 10);
        };

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

        $scope.orderByFunction = function (field){
            $scope.orderCriteria = field;
            $scope.orderDirection = !$scope.orderDirection;
        };

        $scope.orderByFunctionInit = function (field){
            $scope.orderCriteria = field;
            $scope.orderDirection = false;
        };

        $scope.deleteOneUser = function(user) {
            $http({
                    method: 'POST',
                    url: "http://localhost:8080/Restful/user/delete",
                    data: user
                }
            ).then(function successCallback(response, data, status) {
                console.log("Success Response = "+response+ " Status = "+status+" Data: "+data);
                showAlert('Usuário apagado com sucesso!');
                loadUsersList();
            }, function errorCallback(response, data, status) {
                console.log("Error Response = "+response+ " Status = "+status+" Data: "+data);
            });
        };

        $scope.deleteUsers = function(users) {
            var usersSelecteds = users.filter(function (user){
                if(user.selected) {
                    return user;
                }
            });
            $http({
                    method: 'POST',
                    url: "http://localhost:8080/Restful/user/deleteUsers",
                    data: {'users': usersSelecteds}
                    }
            ).then(function successCallback(response, data, status) {
                console.log("Success Response = "+response+ " Status = "+status+" Data: "+data);
                showAlert('Usuário(s) apagado(s) com sucesso!');
                loadUsersList();
            }, function errorCallback(response, data, status) {
                console.log("Error Response = "+response+ " Status = "+status+" Data: "+data);
            });
        };

        $scope.someoneSelected = function (users) {
            return users.some(function (user) {
                return user.selected;
            });
        };

        loadUsersList();
    });