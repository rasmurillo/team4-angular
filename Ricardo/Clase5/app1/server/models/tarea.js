
var mongoose=require('mongoose');

module.exports=mongoose.model('Tarea',{
    texto:{type:String,default:''}
});
