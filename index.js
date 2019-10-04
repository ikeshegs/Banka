const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Routes
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
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

app.use('/api/v1', userRoute);
app.use(authRoute);

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