const express = require("express");
var app = require('express')//.createServer();
const path = require("path");

app.use(express.static("public"));
  app.use(
    "/css",
    express.static(path.resolve(__dirname + `/css`))
  );

  app.use(
    "/js",
    express.static(path.resolve(__dirname + `/js`))
  );

app.get('/', function(req, res){
  res.render('/pages/index.html');
});

app.get('/*', function(req, res){
  res.render('/pages/404.html');
});

app.listen(1243);

