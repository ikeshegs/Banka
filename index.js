const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Sequelize = require('sequelize');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SessionStore = require('express-session-sequelize')(session.Store);

// Routes
const userRoute = require('./routes/user');
const errorPageController = require('./controllers/errorPageController');

dotenv.config();
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

const sessionDB = new Sequelize(process.env.DB_URI, {
  dialect: 'postgres'
});

const sequelizeSessionStore = new SessionStore({
  db: sessionDB
});

app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: sequelizeSessionStore,
  resave: false,
  saveUninitialized: false
}))

app.use(userRoute);

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Banka',
    path: '/',
    onPage: false
  });
});

app.use(errorPageController.get404);

const PORT = process.env.PORT || 3500;
app.listen(PORT);
console.log('App is running on port', PORT);

module.exports = app;