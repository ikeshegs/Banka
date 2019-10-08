'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    accountType: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Account, {
      foreignKey: 'id',
      as: 'owner',
      onDelete: 'CASCADE',
    });

    User.hasMany(models.Transaction, {
      foreignKey: 'id',
      as: 'cashier',
      onDelete: 'CASCADE',
    });
  };
  return User;
};