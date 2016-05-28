/**
 * Created by ANGULAR on 25/5/2016.
 */
var mongoose = require('mongoose');
module.exports=mongoose.model('Tarea',{
    texto: {type:String, default:''}

});

