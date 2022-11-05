// app nodejs app

var express = require('express');
var app = express();
let dim = process.env.PORT || 8080
app.get('/', function (req, res) {
  res.send('Hello World!');
  });

  app.listen(dim, function () {
    console.log('Example app listening on port 8080!');
    });

