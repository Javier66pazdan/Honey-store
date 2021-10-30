const express = require('express');

const registerRouter = express.Router();

registerRouter
  .get('/', (req, res) => {
    res.render('register/register');
  });

module.exports = {
  registerRouter,
};
