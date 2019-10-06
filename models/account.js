const Sequelize = require('sequelize');

const sequelize = require('../utils/database');
const User = require('./user');

const Account = sequelize.define('account', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  accountNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  createdOn: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false
  },
  owner: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: User.id,
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  balance: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = Account;