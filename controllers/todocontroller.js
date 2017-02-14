const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
var data = [];
var x = 0;


module.exports = (app) => {

  app.get('/home', (req, res) => {
    res.render('todo', {blocks : data})
  })

  app.delete('/home', urlencodedParser,(req, res, next) => {
    data.splice(req.body.id, 1);
    res.end()
  })

  app.post('/', urlencodedParser, (req, res) => {
    data.push(req.body)
    res.redirect('/home')
  })

  app.get('/', (req, res) =>{
    res.redirect('/home')
  })

}
