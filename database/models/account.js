'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    accountNumber: DataTypes.INTEGER,
    type: DataTypes.STRING,
    status: DataTypes.STRING,
    balance: DataTypes.FLOAT,
    owner: DataTypes.STRING
  }, {});
  Account.associate = function(models) {
    // associations can be defined here
    Account.hasMany(models.Transaction, {
      foreignKey: 'accountNumber',
      as: 'accountNumber',
      onDelete: 'CASCADE',
    });

    Account.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'owner',
      onDelete: 'CASCADE',
    })
  };
  return Account;
};