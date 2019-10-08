require('dotenv').config()

module.exports = {
  production: {
    url: process.env.DB_URI,
    dialect: 'postgres',
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  development: {
    url: process.env.DB_PROD_URI,
    dialect: 'postgres',
  },
}