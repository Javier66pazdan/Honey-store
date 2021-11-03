const express = require('express');
const { ensureAuthenticated } = require('../config/auth');

const storeRouter = express.Router();

storeRouter
  .get('/', ensureAuthenticated, (req, res) => {
    res.render('store/store', {
      name: req.user.username,
    });
  });

module.exports = {
  storeRouter,
};
