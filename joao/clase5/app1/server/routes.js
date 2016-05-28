/**
 * Created by ANGULAR on 25/5/2016.
 */

var Tarea = require('./models/tarea');
function getTareas(res) {
    Tarea.find(function (err,todos) {
        if(err)
        {
            res.send(err);
        }
        res.json(todos);
    });   
};

module.exports = function (app) {
    app.get('/api/todos',function (req, res) {
        getTareas(res);
    });

    app.post('/api/todos',function (req, res) {
        Tarea.create(
            {
                texto:req.body.texto,
                done:false
            },function (err,todo) {
                if(err)
                {
                    res.send(err);
                }
                getTareas(res);
            }
        );
    });

    app.delete('/api/todos/:id',function (req, res) {
        Tarea.remove({
            _id:req.params.id
        },function (err,todo) {
            if(err)
            {
                res.send(err);
            }
            getTareas(res);
        });
    });

    app.get('*',function (req,res) {
        res.sendFile(__dirname + '/client/index.html'); //por defecto se envia a este archivo
        //res.sendFile(__dirname.replace('\server','') + '/client/index.html'); //por defecto se envia a este archivo
        //res.sendFile( 'C:/Workspaces/team4-angular/joao/clase5/app1/client/index.html'); //por defecto se envia a este archivo
    });
};