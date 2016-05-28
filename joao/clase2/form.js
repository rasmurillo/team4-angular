var app = angular.module('form',[]);
app.controller('MainController',function ($scope) {
    
    $scope.listaUsuarios=[];
    $scope.Limpiar = function(){
        $scope.usuario = {};
    };
    $scope.Registro=function () {
        $scope.listaUsuarios.push($scope.usuario);
        //$scope.usuario = {};
    };
    $scope.Limpiar();
});
