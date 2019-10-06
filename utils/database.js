const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();

let sequelize;

if (process.env.NODE_ENV = 'development') {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//   dialect: 'postgres'
// });

module.exports = sequelize;