angular.module("CrudAgro")
    .controller("cadastroCtrl", ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams){
        $scope.control = "Cadastro Control";

        $scope.action = $routeParams.action;

        var getUser = function(id){
            $http.get("http://localhost:8080/Restful/user/listarUm?id="+id).success(function (data, status) {
                data.birthday = new Date(data.birthday);
                $scope.user = data;
                console.log($scope.user);
            });
        };

        if($scope.action === 'Editar'){
            $scope.title = "Edição de usuário";
            $scope.titleOfButton = "Editar";
            getUser($routeParams.id);
        }else{
            $scope.title = "Cadastro de novo usuário";
            $scope.titleOfButton = "Salvar";
        }

        $scope.addUpdateUser = function(user) {
            if($scope.action === 'Editar'){
                console.log("calling update post");
                $http.post("http://localhost:8080/Restful/user/update",
                    "id=" + encodeURIComponent(user.id) +
                    "&first_name=" + encodeURIComponent(user.firstName) +
                    "&last_name=" + encodeURIComponent(user.lastName) +
                    "&birthday=" + encodeURIComponent(user.birthday) +
                    "&address=" + encodeURIComponent(user.address) +
                    "&address_complement=" + encodeURIComponent(user.addressComplement) +
                    "&district=" + encodeURIComponent(user.district) +
                    "&telephone=" + encodeURIComponent(user.telephone) +
                    "&mobile_phone=" + encodeURIComponent(user.mobilePhone) +
                    "&rg=" + encodeURIComponent(user.rg) +
                    "&cpf=" + encodeURIComponent(user.cpf) +
                    "&state=" + encodeURIComponent(user.state) +
                    "&city=" + encodeURIComponent(user.city) +
                    "&postcode=" + encodeURIComponent(user.postcode)
                ).success(function (data, status) {
                        console.log("Success Response = "+data+ " Status = "+status);
                }).error(function (data, status){
                    console.log("Error Response = "+data+ " Status = "+status);
                });
            }else{
                console.log("calling insert post");
                $http.post("http://localhost:8080/Restful/user/add",
                    "first_name=" + encodeURIComponent(user.firstName) +
                    "&last_name=" + encodeURIComponent(user.lastName) +
                    "&birthday=" + encodeURIComponent(user.birthday) +
                    "&address=" + encodeURIComponent(user.address) +
                    "&address_complement=" + encodeURIComponent(user.addressComplement) +
                    "&district=" + encodeURIComponent(user.district) +
                    "&telephone=" + encodeURIComponent(user.telephone) +
                    "&mobile_phone=" + encodeURIComponent(user.mobilePhone) +
                    "&rg=" + encodeURIComponent(user.rg) +
                    "&cpf=" + encodeURIComponent(user.cpf) +
                    "&state=" + encodeURIComponent(user.state) +
                    "&city=" + encodeURIComponent(user.city) +
                    "&postcode=" + encodeURIComponent(user.postcode)
                ).success(function (data, status) {
                        console.log("Success Response = "+data+ " Status = "+status);
                }).error(function (data, status){
                    console.log("Error Response = "+data+ " Status = "+status);
                });
            }
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