angular.module("CrudAgro")
    .controller("listaCtrl", function ($scope){
        $scope.control = "Lista Control";
        $scope.user = {};
        $scope.orderByFunction = function (field){
            $scope.orderCriteria = field;
            $scope.orderDirection = !$scope.orderDirection;
        };

        $scope.deleteOneUser = function(users, id) {
            //var position = user.id;
            //var position = users.indexOf("id");
            //$scope.users.splice(position-1,1);
        };

        $scope.deleteUsers = function(users) {
            //A lista de contatos original recebe os valores filtrados dos elementos que NÃO estão selecionados
            $scope.users = users.filter(function (user){
                if(!user.selected) return user;
            });
        };

        $scope.someoneSelected = function (users) {
            // Verifica se há algum elemento em contatos que possua o valor de selecionado igual a true
            return users.some(function (user) {
                return user.selected;
            });
        };

        $scope.users= [
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
        ];
    });