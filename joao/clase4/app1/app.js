var express = require('express');
var app = express();
app.get('/solicitud',function(req, res){
	res.send('hola mundo JS');
});
app.listen(3000, function(){	
	console.log('Ejemplo app1');
});