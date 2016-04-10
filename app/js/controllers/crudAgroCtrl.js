angular.module("CrudAgro")
    .controller("crudAgroCtrl", function ($scope){
        $scope.control = "Crud Agro Control";
        $scope.user = {};
        $scope.users= [
            {"firstName":"Pedro","lastName":"Soeiro","address":"Rua dos Soeiros","addressComplement":"Apt 601","district":"Serrinha","telephone":"8532171819","mobilePhone":"8599995543",
                "rg":"200110110101",
                "cpf":"01613829589","state":"RJ","city":"Rio de Janeiro","postCode":"68910-010"},
            {"firstName":"sdasd","lastName":"asdasd","address":"asdasd","addressComplement":"asdasd","district":"asdasd","telephone":"asdasd","mobilePhone":"asdasd","rg":"asdasd",
                "cpf":"asdasd","state":"AP","city":"asdasd","postCode":"asdasd"}
        ];



        $scope.add = function (){
            $scope.users.push($scope.user);
            $scope.user = {};
        };

    });