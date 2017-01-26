// const express = require('express');
// const burger = require('../models/burger.js');
const burgers = require('../config/orm.js');

// const app = express();

module.exports = (app) => {

  app.get('/', (req, res) => {
      burgers.selectAll(res);
      // orm.selectAllDevoured(res);
  });

  app.get('/selectall', (req, res) => {
      burgers.selectAll();
  });

  app.post('/', (req, res) => {
      burgers.insertOne(req.body.burger);
      res.redirect("/");
  });

  app.post('/:id', (req, res) => {
      burgers.updateOne(req.params.id, res);
  });

}
