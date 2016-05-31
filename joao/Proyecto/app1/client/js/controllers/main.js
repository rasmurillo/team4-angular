/**
 * Created by ANGULAR on 25/5/2016.
 */
angular.module('appController',[])
    .controller('mainController',function ($scope,$http,FacTareas) {
        $scope.form={};
        $scope.loading=true;
        FacTareas.obtener()
            .success(function (data) {
                $scope.tareas = data;
                $scope.loading = false;
            });

        $scope.agregar = function () {
            if($scope.form.nombre != undefined){
                $scope.loading =true;
                FacTareas.agregar($scope.form)
                    .success(function (data) {
                        $scope.loading = false;
                        $scope.form={};
                        $scope.tareas = data;
                    });
            }
        };
        
        $scope.eliminar = function (id) {
            $scope.loading = true;
            FacTareas.eliminar(id)
                .success(function (data) {
                    $scope.loading = false;
                    $scope.tareas = data;
                });
        };
        $scope.cargarEdit = function (data) {
            $scope.form2 = {
                id : data._id,
                nombre : data.nombre,
                direccion : data.direccion
            }
        };
        
        $scope.actualizar = function () {
            if($scope.form2.nombre != undefined){
                $scope.loading =true;
                FacTareas.editar($scope.form2)
                    .success(function (data) {
                        $scope.loading = false;
                        $scope.form2={};
                        $scope.tareas = data;
                    });
            }
        };
    });
