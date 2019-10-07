const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();

let sequelize;

if (process.env.NODE_ENV = 'development') {
  sequelize = new Sequelize(process.env.DB_URI);
} else {
  sequelize = new Sequelize(process.env.DATABASE_URL || process.env.DB_PROD2_URI);
}

module.exports = sequelize;