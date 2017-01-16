var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = 8080;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')))


app.listen(port, function(){
    console.log('App listening on port ' + port);
})