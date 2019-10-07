const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();

let sequelize = new Sequelize(process.env.DB_URI) || new Sequelize(process.env.DB_PROD_URI);

// if (process.env.NODE_ENV = 'development') {
//   sequelize = new Sequelize(process.env.DB_PROD_URI);
// }
// if (process.env.NODE_ENV = 'production') {
//   sequelize = new Sequelize(process.env.DB_DEV_NAME, process.env.DB_DEV_USERNAME, process.env.DB_DEV_PASSWORD, {
//     host: process.env.DB_DEV_HOST,
//     dialect: 'postgres'
//   });
// }

module.exports = sequelize;