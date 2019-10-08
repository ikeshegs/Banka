'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    accountNumber: DataTypes.INTEGER,
    type: DataTypes.STRING,
    cashier: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    oldBalance: DataTypes.FLOAT,
    newBalance: DataTypes.FLOAT
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'cashier',
      onDelete: 'CASCADE',
    });

    Transaction.belongsTo(models.Account, {
      foreignKey: 'accountNumber',
      as: 'accountNumber',
      onDelete: 'CASCADE',
    })
  };
  return Transaction;
};