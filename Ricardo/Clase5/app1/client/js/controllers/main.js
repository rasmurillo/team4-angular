/**
 * Created by ANGULAR on 25/05/2016.
 */
angular.module('appController',[])
    .controller('mainController',function ($scope,$http,FacTareas) {
        $scope.form={};
        $scope.loading=true;
        FacTareas.obtener()
            .success(function (data) {
                $scope.tareas=data;
                $scope.loading=false;
            });
        $scope.agregar=function () {
            if($scope.form.texto!=undefined){
                $scope.loading=true;
                FacTareas.agregar($scope.form)
                    .success(function (data) {
                        $scope.loading=false;
                        $scope.form={};
                        $scope.tareas=data;
                    });
            }
        };
        $scope.eliminar=function (id) {
            $scope.loading=true;
            FacTareas.eliminar(id)
                .success(function (data) {
                    $scope.loading=false;
                    $scope.tareas=data;
                });
        };



    });