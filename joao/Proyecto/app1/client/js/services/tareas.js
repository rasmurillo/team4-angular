/**
 * Created by ANGULAR on 25/5/2016.
 */

angular.module('TareaService',[])
    .factory('FacTareas',function ($http) {
        return{
            obtener:function(){
                return $http.get('/api/todos');
            },
            agregar:function(data){
                joao1=data;
                return $http.post('/api/todos',data);
            },
            eliminar:function(id){
                return $http.delete('/api/todos/'+id);
            }
        }
    });