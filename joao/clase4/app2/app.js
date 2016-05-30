/**
 * Created by ANGULAR on 23/5/2016.
 */
var express = require('express');
var app = express();
app.get('/',function (req,res) {
    //res.send('hola joao');
    res.json({id:1,usuario:"joao"});
});

app.get('/uno',function (req,res) {
    //res.send('hola joao');
    res.redirect("http://www.google.com");
});

app.get('/uno2',function (req,res) {
    //res.send('hola joao');
    res.redirect("/dos");
});

app.get('/uno3:nombre',function (req,res) {
    //joao = req;
    res.send('hola ' + req.params.nombre);
    //res.send("http://www.google.com");
});

app.get('/dos',function (req,res) {
    res.send('Hola mundo js 2 dos');
});
/*
app.post('/uno',function (req,res) {
    res.send('Hola mundo js 2 post');
});

app.put('/dos',function (req,res) {
    res.send('Hola mundo js 2 put');
});

app.delete('/tres',function (req,res) {
    res.send('Hola mundo js 2 delete');
});
*/

app.get('/dir',function (req, res) {
    res.send('carpeta local ' + __dirname);
});
app.get('/archivo/:nombre',function (req,res,next) {
    //joao = "dfff";
    var opciones = {
        root: __dirname + '/archivos/',
        dotfiles: 'deny',
        headers:{
            'x-timestamp': Date.now(),
            'x-sent':true
        }
    };
    var archivo = req.params.nombre;
    //var joao = archivo;
    res.sendFile(archivo,opciones, function (err) {
        if(err)
        {
            console.log(err);
            res.status(err.status).end();
        }
        else
        {
            console.log('OK, archivo enviado '+archivo);
        }
    });
});

app.listen(3001,function () {
    console.log('Ejemplo app2');
});