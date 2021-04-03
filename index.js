var app = require('express')//.createServer();

app.get('/*', function(req, res){
  res.render('op/404.html');
});

app.listen(1243);

