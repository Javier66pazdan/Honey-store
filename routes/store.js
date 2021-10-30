const express = require('express');

const storeRouter = express.Router();

storeRouter
  .get('/', (req, res) => {
    res.render('store/store');
  });

module.exports = {
  storeRouter,
};
