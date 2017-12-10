'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    underscored: true
  });

  user.associate = function(models) {
    user.belongsToMany(models.image, {through: 'userImages'})
  }

  return user;
};
