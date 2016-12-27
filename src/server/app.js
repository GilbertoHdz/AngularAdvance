//setup
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

//config
app.use(morgan('dev')); //Hace un log de cada request al terminal
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); //parse application/json
app.use(favicon(__dirname + '/favicon.ico'));

app.use('/', express.static('./src/client')); //Setea los archivos staticos a src/client

//conf Application
app.get('*', function(req, res) {
  res.sendfile('./src/client/index.html'); //Carga el unico archivo de vista 
    //(angular manejara los cambios de las paginas)
});

//listen
app.listen(9000);
console.log("app listening on port: 9000");
