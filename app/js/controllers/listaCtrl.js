angular.module("CrudAgro")
    .controller("listaCtrl", function ($scope, $http, $mdDialog){
        $scope.control = "Lista Control";
        $scope.users = [];

        var loadUsersList = function () {
            $http.get("http://localhost:8080/Restful/user/listarTodos"
            ).success(function (data, status) {
                console.log(data);
                $scope.users = data.user.map(function(el) {
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

        var showAlert = function(ev) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('This is an alert title')
                    .textContent('You can specify some description text in here.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                    .targetEvent(ev)
            );
        };

        $scope.orderByFunction = function (field){
            $scope.orderCriteria = field;
            $scope.orderDirection = !$scope.orderDirection;
        };

        $scope.deleteOneUser = function(user) {
            $http({
                    method: 'POST',
                    url: "http://localhost:8080/Restful/user/delete",
                    data: user
                }
            ).then(function successCallback(response, data, status) {
                console.log("Success Response = "+response+ " Status = "+status+" Data: "+data);
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
            );
        };

        $scope.someoneSelected = function (users) {
            return users.some(function (user) {
                return user.selected;
            });
        };

        loadUsersList();
    });