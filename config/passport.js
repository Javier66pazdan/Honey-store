const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const { compare } = require('bcryptjs');

const { User } = require('../models/User');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // check if email is in database
      User.findOne({ email })
      // eslint-disable-next-line consistent-return
        .then((user) => {
          if (!user) {
            return done(null, false, { message: 'Ten email nie jest zarejestrowany' });
          }

          // match password - user comes from database
          compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              return done(null, user);
            }
            return done(null, false, { message: 'Hasło jest niepoprawne' });
          });
        })
        .catch((err) => console.error(err));
    }),
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
