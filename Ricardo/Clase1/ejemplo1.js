/**
 * Created by ANGULAR on 14/05/2016.
 */
var app=angular.module('app',[]);
function MainController($scope){
    $scope.nombre="Ricardo";
    $scope.actualizar=function () {
        $scope.nombre="Alex";
    }
}
app.controller('MainController',MainController);