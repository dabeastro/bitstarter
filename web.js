var express = require('express');

Var App = Express.Createserver(Express.Logger());

App.Get('/', Function(Request, Response) {
  Response.Send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});