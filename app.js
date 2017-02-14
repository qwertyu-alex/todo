"use strict";
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express();
const todoController = require('./controllers/todocontroller.js')
const port = 8000;


app.set("view engine", "ejs");
app.use('/', (req, res, next)=> {
  console.log(req.url);
  next();
})
app.use(express.static("./public"));


todoController(app)

app.listen(port);
console.log("running port: " + port);
