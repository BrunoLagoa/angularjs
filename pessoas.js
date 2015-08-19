angular
    .module('pessoas', [])

    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'listar.html'
            })
            .when('/pessoa/adicionar', {
                templateUrl: 'adicionar.html',
                controller: 'CtrlAdicionar'
            })
            .when('/pessoa/:index', {
                templateUrl: 'editar.html',
                controller: 'CtrlEditar'
            });

    })

    .controller('CtrlPessoas', function($scope) {

        $scope.pessoas = [
            {nome: "Maria", cidade: "São Paulo"},
            {nome: "Pedro", cidade: "Rio de Janeiro"},
            {nome: "João", cidade: "Brasilia"},
            {nome: "Cleber", cidade: "Belo Horizonte"}
        ];

        $scope.remover = function(index) {
            $scope.pessoas.splice(index, 1);
        };

    })

    .controller('CtrlAdicionar', function($scope) {

        $scope.add = function() {

            $scope.pessoas.push($scope.pessoa);

            $scope.pessoa = "";
            $scope.result = "Registro adicionado com sucesso!";
        };

    })

    .controller('CtrlEditar', function($scope, $routeParams) {
        $scope.pessoa = $scope.pessoas[$routeParams.index];
    });