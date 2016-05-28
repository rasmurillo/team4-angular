angular.module('app1',[])
    .controller('main',function ($scope) {
        $scope.usuarios = [
            {id:1,nombre:"Luis"},
            {id:2,nombre:"Paola"},
            {id:3,nombre:"Hilarion"},
            {id:4,nombre:"Joao"},
            {id:5,nombre:"Elio"},
            {id:6,nombre:"Freddy"},
            {id:7,nombre:"Angel"},
            {id:8,nombre:"Valeria"}
        ];
    });

