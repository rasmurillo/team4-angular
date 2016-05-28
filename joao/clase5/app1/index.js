/**
 * config lirerias
 */

//config express
var express = require('express');
var app = express();

//config mongoose
var mongoose = require('mongoose');

//config port
var port = process.env.PORT || 8080;

// config otras librerias
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

/*** configuracion de base de datos **/

var database = require('./config/database');
mongoose.connect(database.localUrl);

/** configurar aplicacion **/
app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

require('./server/routes.js')(app);
app.listen(port);
console.log('app1 ejecutandose en puerto' + port);

