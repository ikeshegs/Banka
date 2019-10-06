const Sequelize = require('sequelize');

const sequelize = require('../utils/database');
const User = require('./user');
const Account = require('./account');

const Transaction = sequelize.define('transaction', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  accountNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: Account,
      key: Account.accountNumber,
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  createdOn: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cashier: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: User.id,
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  oldBalance: {
    type: Sequelize.FLOAT,
    allowNull: false,
    references: {
      model: Account,
      key: Account.balance,
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  newBalance: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = Transaction;