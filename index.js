const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Routes
const userRoutes = require('./routes/userRoute');

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(userRoutes);

app.get('/', (req, res) => {
  return res.json({
    status: 200,
    message: 'Welcome to the Banka App'
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('App is running on port', PORT);

module.exports = app;