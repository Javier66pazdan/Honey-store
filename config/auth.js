module.exports = {
  // it is only for sections which are for logged in (used as a middleware)
  // eslint-disable-next-line consistent-return
  ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated) {
      return next();
    }
    req.flash('error_msg', 'Proszę zaloguj się.');
    res.redirect('/login');
  },
};
