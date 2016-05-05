angular.module("CrudAngularJS", ["ngMaterial", "ngMessages", "ngRoute" ,"ngAnimate", "ui.mask"])
    .config(['$routeProvider', '$locationProvider', '$mdThemingProvider',
    function($routeProvider, $locationProvider, $mdThemingProvider ) {
        $routeProvider
            .when('/cadastro', {
                templateUrl: 'views/cadastro.html',
                controller: 'cadastroCtrl'
            })
            .when('/lista', {
                templateUrl: 'views/lista.html',
                controller: 'listaCtrl'
            })
        .otherwise('/lista');

        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('grey');
    }])
;


