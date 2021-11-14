const express = require('express');
const { basket } = require('../models/Basket');

const basketRouter = express.Router();

basketRouter
  .get('/', (req, res) => {
    res.render('basket/basket', {
      products: basket.getAll(),
      sum: basket.summary(),
    });
  });

module.exports = {
  basketRouter,
};
