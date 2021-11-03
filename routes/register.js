/* eslint-disable object-shorthand */
const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../models/User');

const registerRouter = express.Router();

registerRouter
  .get('/', (req, res) => {
    res.render('register/register');
  })
  .post('/', (req, res) => {
    const {
      username, email, password, confirmPassword,
    } = req.body;

    const errors = [];

    // Check required fields
    if (!username || !email || !password || !confirmPassword) {
      errors.push({ msg: 'Należy uzupełnić wszystkie pola' });
    }

    // Check passwords match
    if (password !== confirmPassword) {
      errors.push({ msg: 'Hasła nie są takie same!' });
    }

    if (errors.length > 0) {
      res.render('register/register', {
        errors,
        username,
        email,
        password,
        confirmPassword,
      });
    } else {
      // validation passed
      User.findOne({ email: email })
        .then((user) => {
          if (user) {
            // User exists
            errors.push({ msg: 'Email jest już używany przez inne konto!' });
            res.render('register/register', {
              errors,
              username,
              email,
              password,
              confirmPassword,
            });
          } else {
            const newUser = new User({
              username,
              email,
              password,
            });

            // bcrypt hash
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (error, hash) => {
                if (error) throw error;

                newUser.password = hash;
                // save user
                newUser.save()
                // eslint-disable-next-line no-unused-vars
                  .then((u) => {
                    req.flash('success_msg', 'Rejestracja przebiegła pomyślnie, możesz się zalogować.');
                    res.redirect('/login');
                  })
                  .catch((e) => console.error(e));
              });
            });
          }
        });
    }
  });

module.exports = {
  registerRouter,
};
