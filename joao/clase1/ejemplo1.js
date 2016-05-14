/**
 * Created by ANGULAR on 14/5/2016.
 */
var app = angular.module('app',[]);
/*
function MainController($scope) {
    
}
app.controller('MainController',MainController);
*/
app.controller('MainController',function ($scope) {
    $scope.nombre = 'joao';
    $scope.Actualizar = function(){
        $scope.nombre = "carlos";
    };
});

