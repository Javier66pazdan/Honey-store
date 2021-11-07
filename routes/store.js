const express = require('express');

const storeRouter = express.Router();

storeRouter
  .get('/', (req, res) => {
    // const name = req.user && req.user.username;
    res.render('store/store', {
      // name,
    });
  });

module.exports = {
  storeRouter,
};
