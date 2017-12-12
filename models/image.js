'use strict';
module.exports = (sequelize, DataTypes) => {
  var image = sequelize.define('image', {
    userId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    fave: DataTypes.BOOLEAN,
    neutral: DataTypes.FLOAT,
    happy: DataTypes.FLOAT,
    sad: DataTypes.FLOAT,
    surprised: DataTypes.FLOAT,
    fearful: DataTypes.FLOAT,
    angry: DataTypes.FLOAT
  });

  image.associate = function(models) {
    image.belongsTo(models.user);
  };

  return image;
};
