const express = require('express');
const hbs = require('express-handlebars');
const { homeRouter } = require('./routes/home');
const { storeRouter } = require('./routes/store');
const { loginRouter } = require('./routes/login');
const { registerRouter } = require('./routes/register');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.engine('.hbs', hbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/store', storeRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.listen(3000);
