const express = require('express');
const passport = require('passport');

const loginRouter = express.Router();

loginRouter
  .get('/', (req, res) => {
    res.render('login/login');
  })
  .post('/', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true,
    })(req, res, next);
  });

module.exports = {
  loginRouter,
};
