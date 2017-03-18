angular.module('AppDemoModule', ['ngRoute', 'ngAnimate', 'ngResource'])
    .run(['$rootScope', function ($rootScope) {
        // criada variavel rootScope para ser compartilhada com todos os controller
        $rootScope.veiculo = {};
        $rootScope.lista = [
            veiculo = {
                id: 1,
                modelo: "Ceifadeira",
                ano: "2014",
                combustivel: "gasolina",
                foto: '../img/veiculos/'
            },
            veiculo = {
                id: 2,
                modelo: "trator",
                ano: "2014",
                combustivel: "gasolina",
                foto: '../img/veiculos/'
            },
            veiculo = {
                id: 3,
                modelo: "Colheitadeira",
                ano: "2014",
                combustivel: "gasolina",
                foto: '../img/veiculos/'
            }
        ];

        $rootScope.getFakeID = function () {
            return Math.floor((Math.random() * 10000) + 500);
        };

    }])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html'
        })
            .when('/crud', {
                templateUrl: 'views/crud.html',
                controller: 'CrudController'
            })
            .when('/lista', {
                templateUrl: 'views/lista.html',
                controller: 'CrudController'
            })
            .when('/edit/:fotoId', {
                templateUrl: 'views/crud.html',
                controller: 'CrudController'
            })
            .otherwise({ redirectTo: '/home' });
    }]);