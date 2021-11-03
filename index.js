const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const { homeRouter } = require('./routes/home');
const { storeRouter } = require('./routes/store');
const { loginRouter } = require('./routes/login');
const { registerRouter } = require('./routes/register');
const { handlebarsHelpers } = require('./utils/handlebars-helpers');
const { logoutRouter } = require('./routes/logout');

const app = express();

const PORT = process.env.PORT || 3000;

require('./config/passport')(passport);

// DB config
const db = require('./config/keys').MongoURI;

// Connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDb connected...'))
  .catch((err) => console.log(err));

// Middlewares
app.use(express.json());
app.use(express.static('public'));
app.engine('.hbs', hbs({
  extname: '.hbs',
  helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: false }));

// Express session
app.use(session({
  secret: 'secret text',
  resave: false,
  saveUninitialized: true,
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// flash
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.login = req.isAuthenticated(); // checks if someone is logged in - used i main.hbs
  next();
});

// Routes
app.use('/', homeRouter);
app.use('/store', storeRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/logout', logoutRouter);

app.listen(PORT);
