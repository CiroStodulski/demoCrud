angular.module('AppDemoModule')
    .controller('CrudController', ['$scope', '$rootScope', '$routeParams', function ($scope, $rootScope, $routeParams) {
        // para exibir mensagem no front
        $scope.pesquisa = '';

        $scope.veiculo = {};
        // criado funcao para guardar veiculo na lista
        $scope.save = function save(data) {
            $scope.veiculo = {
                id: $rootScope.getFakeID(),
                modelo: data.modelo,
                ano: data.ano,
                combustivel: data.combustivel,
                foto: '../img/veiculo/'
            }
            $rootScope.lista.push($scope.veiculo);
            console.log('Veiculo salvo com sucesso!');
            // reset na variavel veiculo
            $scope.veiculo = {};
        }

        $scope.excluir = function (key) {
            for (var i = 0; i < $rootScope.lista.length; i++) {
                if ($rootScope.lista[i].id == key) {
                    $rootScope.lista.splice(i, 1);
                    $scope.pesquisa = '';
                }
            }
        };


        if ($routeParams.fotoId) {
            for (var i = 0; i < $rootScope.lista.length; i++) {
                if ($rootScope.lista[i].id == $routeParams.fotoId) {
                    $scope.veiculo = {
                        id: $rootScope.getFakeID(),
                        modelo: $rootScope.lista[i].modelo,
                        ano: $rootScope.lista[i].ano,
                        combustivel: $rootScope.lista[i].combustivel,
                        foto: '../img/veiculo/'
                    };
                    $rootScope.lista.splice(i, 1);
                    $scope.pesquisa = '';
                }
            }


        }

        console.log($scope.veiculo);

        $scope.edit = function (obj) {
            $scope.veiculo = angular.copy(obj);
            // console.log($scope.veiculo);
            /*  for (var i = 0; i < $rootScope.lista.length; i++) {
                  if ($rootScope.lista[i].id == obj.id) {
                      $rootScope.lista.splice(i, 1);
                      $scope.pesquisa = '';
                      return $scope.veiculo;
                  }
              }*/
        }


    }]);


