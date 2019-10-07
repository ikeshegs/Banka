const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();

let sequelize;

// if (process.env.NODE_ENV = 'development') {
//   sequelize = new Sequelize(process.env.DB_URI);
// } else {
//   sequelize = new Sequelize(process.env.DATABASE_URL || process.env.DB_PROD2_URI);
// }

if (process.env.NODE_ENV = 'development') {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
  });
} else {
  sequelize = new Sequelize(process.env.DB_PROD_NAME, process.env.DB_PROD_USERNAME, process.env.DB_PROD_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
  });
}

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//   host: 'localhost',
//   dialect: 'postgres'
// });

module.exports = sequelize;