'use strict';
module.exports = (sequelize, DataTypes) => {
  var userImages = sequelize.define('userImages', {
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }
  
  return userImages;
};
