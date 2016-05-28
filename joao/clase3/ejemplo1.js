/**
 * Created by ANGULAR on 18/5/2016.
 */

var app = angular.module('app',[]);

app.service('MathService',function() {
    this.add = function(a,b){
        return a+ b;
    };
    this.subtract = function(a,b){
        return a - b;
    };
    this.multiply = function(a,b){
        return a * b;
    };
    this.divide = function(a,b){
        return a / b;
    };

});

app.service('Calculadora',function (MathService) {
    this.cuadrado = function (a) {
        return MathService.multiply(a,a);
    };
    this.cubo = function (a) {
        return MathService.multiply(a,MathService.multiply(a,a));
    };
    
});
app.constant('phi',3.1416);
app.value('codigo','abc');
app.service('Circunferencia',function (MathService,phi) {
    this.perimetro = function (a) {
        var r= MathService.multiply(a,2);
        return r2= MathService.multiply(r,phi);
    };


});


app.provider('equipo',function () {
    var version;
    return{
        setVersion: function (valor) {
            version = valor;
        },
        $get: function () {
            return {
             descripcion : 'equipo v' +  version
            }
        }
    }
});

app.config(function (equipoProvider) {
    equipoProvider.setVersion('2.0');
});

app.factory('catalogoServicios',function () {
    function add(a,b) {
        return a+b;
    }
    function subtract(a,b) {

    }
    return {
        add:add
    }
})



app.controller('calculo',function ($scope,Calculadora,Circunferencia,codigo,equipo, catalogoServicios) {

    $scope.resultado = catalogoServicios.add(5,5);
    //$scope.resultado = equipo.descripcion;

    //$scope.resultado = codigo;
    $scope.CalcularCuadrado = function () {
        $scope.resultado = Calculadora.cuadrado($scope.numero);
    };
    $scope.CalcularCubo = function () {
        $scope.resultado = Calculadora.cubo($scope.numero);
    };
    $scope.PerimetroCircunferencia = function () {
        $scope.resultado = Circunferencia.perimetro($scope.numero);
    };
    //$scope.numero2 = 2;
   /* $scope.SumarFactory = function () {
        alert("entro");
        $scope.resultado = $scope.resultado = catalogoServicios.add(parseInt($scope.numero),parseInt($scope.numero2));
    };*/
});