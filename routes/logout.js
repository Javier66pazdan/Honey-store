const express = require('express');

const logoutRouter = express.Router();

logoutRouter
  .get('/', (req, res) => {
    req.logout();
    req.flash('success_msg', 'Zostałeś wylogowany');
    res.redirect('/login');
  });

module.exports = {
  logoutRouter,
};
