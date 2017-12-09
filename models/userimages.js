'use strict';
module.exports = (sequelize, DataTypes) => {
  var userImages = sequelize.define('userImages', {
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userImages;
};