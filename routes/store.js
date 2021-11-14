const express = require('express');
const { JARS, returnSingleJar } = require('../data/honey-jars');

const storeRouter = express.Router();

storeRouter
  .get('/', (req, res) => {
    // const name = req.user && req.user.username;
    res.render('store/store', {
      // name,
      jars: JARS,
    });
  })
  .get('/product/:name', (req, res) => {
    res.render('store/product', {
      jar: returnSingleJar(req.params.name),
    });
  });

module.exports = {
  storeRouter,
};
