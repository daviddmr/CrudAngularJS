angular.module("CrudAgro")
    .controller("listaCtrl", function ($scope, $http){
        $scope.control = "Lista Control";
        $scope.users = [];

        var loadUsersList = function () {
            //$http.get("http://localhost:3412/users").success(function (data, status) {
            $http.get("http://localhost:8080/Restful/user/listarTodos").success(function (data, status) {
                console.log(data);
                $scope.users = data.user.map(function(el) {
                    el.id = parseInt(el.id, 10);
                    el.birthday = new Date(el.birthday);
                    return el;
                });
            }).error(function (data, status) {
                $scope.message = "Aconteceu um problema: "+ data;
            });
        };

        $scope.orderByFunction = function (field){
            $scope.orderCriteria = field;
            $scope.orderDirection = !$scope.orderDirection;
        };

        $scope.deleteOneUser = function(user) {
            $http.post("http://localhost:8080/Restful/user/delete",
                "id=" + encodeURIComponent(user.id)
            ).success(function (data, status) {
                console.log("Success Response = "+data+ " Status = "+status);
                loadUsersList();
            }).error(function (data, status){
                console.log("Error Response = "+data+ " Status = "+status);
                loadUsersList();
            });
            /*$scope.users = $scope.users.filter(function(el){
               return el.id != user.id;
            });*/
        };

        $scope.deleteUsers = function(users) {
            $scope.users = users.filter(function (user){
                if(!user.selected) return user;
            });
        };

        $scope.someoneSelected = function (users) {
            return users.some(function (user) {
                return user.selected;
            });
        };

        /*$scope.users= [
            {"id": 1,"firstName":"Pedro","lastName":"Soeiro","birthday": "2016-04-04T03:00:00.000Z", "address":"Rua dos Soeiros","addressComplement":"Apt 601","district":"Serrinha","telephone":"8532171819","mobilePhone":"8599995543",
                "rg":"200110110101",
                "cpf":"01613829589","state":"RJ","city":"Rio de Janeiro","postCode":"68910-010"},
            {"id": 2, "firstName":"Alberto","lastName":"Henrique", "birthday": "2016-01-08T03:00:00.000Z", "address":"Rua dos Henriques","addressComplement":"","district":"José Walter","telephone":"8391918291","mobilePhone":"8718290182",
                "rg":"20018172810"},
            {"id": 3,"firstName":"Pedro","lastName":"Soeiro","birthday": "2016-04-04T03:00:00.000Z", "address":"Rua dos Soeiros","addressComplement":"Apt 601","district":"Serrinha","telephone":"8532171819","mobilePhone":"8599995543",
                "rg":"200110110101",
                "cpf":"01613829589","state":"RJ","city":"Rio de Janeiro","postCode":"68910-010"},
            {"id": 4, "firstName":"Alberto","lastName":"Henrique", "birthday": "2016-01-08T03:00:00.000Z", "address":"Rua dos Henriques","addressComplement":"","district":"José Walter","telephone":"8391918291","mobilePhone":"8718290182",
                "rg":"20018172810"},
            {"id": 5,"firstName":"Pedro","lastName":"Soeiro","birthday": "2016-04-04T03:00:00.000Z", "address":"Rua dos Soeiros","addressComplement":"Apt 601","district":"Serrinha","telephone":"8532171819","mobilePhone":"8599995543",
                "rg":"200110110101",
                "cpf":"01613829589","state":"RJ","city":"Rio de Janeiro","postCode":"68910-010"},
            {"id": 6, "firstName":"Alberto","lastName":"Henrique", "birthday": "2016-01-08T03:00:00.000Z", "address":"Rua dos Henriques","addressComplement":"","district":"José Walter","telephone":"8391918291","mobilePhone":"8718290182",
                "rg":"20018172810"},
            {"id": 7,"firstName":"Pedro","lastName":"Soeiro","birthday": "2016-04-04T03:00:00.000Z", "address":"Rua dos Soeiros","addressComplement":"Apt 601","district":"Serrinha","telephone":"8532171819","mobilePhone":"8599995543",
                "rg":"200110110101",
                "cpf":"01613829589","state":"RJ","city":"Rio de Janeiro","postCode":"68910-010"},
            {"id": 8, "firstName":"Alberto","lastName":"Henrique", "birthday": "2016-01-08T03:00:00.000Z", "address":"Rua dos Henriques","addressComplement":"","district":"José Walter","telephone":"8391918291","mobilePhone":"8718290182",
                "rg":"20018172810"}
        ];*/

        loadUsersList();
    });