const express = require('express');
const { basket } = require('../models/Basket');

const basketRouter = express.Router();

basketRouter
  .get('/', (req, res) => {
    res.render('basket/basket', {
      products: basket.getAll(),
      sum: basket.summary(),
    });
  })
  .post('/', (req, res) => {
    const { id, quantity } = req.body;
    basket.add(id, quantity);

    res
      // .cookie('basket', JSON.stringify(basket.getBasket()))
      .status(201);
  })
  .put('/:id', (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    basket.update(id, quantity);
  })
  .delete('/:id', (req, res) => {
    const { id } = req.params.id;
    basket.delete(id);

    // res
    //   .cookie('basket', JSON.stringify(basket.getBasket()));
  });

module.exports = {
  basketRouter,
};
