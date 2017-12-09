'use strict';
module.exports = (sequelize, DataTypes) => {
  var gif = sequelize.define('gif', {
    emotion: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return gif;
};

