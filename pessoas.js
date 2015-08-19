angular
    .module('pessoas', [])
    .controller('CtrlPessoas', function($scope) {

        $scope.pessoas = [
            {nome: "Maria", cidade: "São Paulo"},
            {nome: "Pedro", cidade: "Rio de Janeiro"},
            {nome: "João", cidade: "Brasilia"},
            {nome: "Cleber", cidade: "Belo Horizonte"}
        ]

    });