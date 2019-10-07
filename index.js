const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Routes
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const errorPageController = require('./controllers/errorPageController');
const sequelize = require('./utils/database');
const User = require('./models/account');
const Account = require('./models/account');
const Transaction = require('./models/transaction');

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

// DATABASE ASSOCIATIONS
Account.belongsTo(User, {
  constraints: true,
  onDelete: 'CASCADE',
  foreignKey: 'id'
});
User.hasMany(Account, {
  foreignKey: 'id'
});
Transaction.belongsTo(Account, {
  constraints: true,
  onDelete: 'CASCADE',
  foreignKey: 'accountNumber'
});
Account.hasMany(Transaction, {
  foreignKey: 'accountNumber'
});

sequelize
  .sync()
  .then(result => {
    console.log(result)
    const PORT = process.env.PORT || 3500;
    app.listen(PORT);
    console.log('App is connected to the database and is running on port', PORT);
  })
  .catch(err => {
    console.log(err);
  })

module.exports = app;