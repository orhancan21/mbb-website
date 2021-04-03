const express = require("express");
const app = express();
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

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/pages/index.html");
});

app.get("/*", (request, response) => {
  response.sendFile(__dirname + "/pages/404.html");
});
/*var app = require('express').createServer();

app.get('/mts', function(req, res){
  res.redirect('https://www.google.com/search?client=chrome&hs=BEa&sxsrf=ALeKk03ka6I7wCijiGkBR0m9Xuq8hghRtg:1615750911025&q=millie+bobby+brown+filmler+ve+tv+%C5%9Fovlar%C4%B1&stick=H4sIAAAAAAAAAONgFuLWz9U3MDQsyjDJrVJC5mipZidb6Rek5hfkpAKpouL8PKuSMt3ijPzyYt3EvBTd3PyyzNTiRaxauZk5OZmpCkn5SUmVCklF-eV5CmmZObk5qUUKZakKJWUKR-fnl-UkFh3ZuIOVEQAnbppmcwAAAA&sa=X&ved=2ahUKEwjFheOYxbDvAhXrzoUKHXw-D74QzTooATAnegQIFxAC&biw=1325&bih=665');
});

app.get('/*', function(req, res){
  res.render('404.html');
});

app.listen(1243);
*/
