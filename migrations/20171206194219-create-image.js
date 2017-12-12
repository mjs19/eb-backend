'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      fave: {
        type: Sequelize.BOOLEAN
      },
      neutral: {
        type: Sequelize.FLOAT
      },
      happy: {
        type: Sequelize.FLOAT
      },
      sad: {
        type: Sequelize.FLOAT
      },
      surprised: {
        type: Sequelize.FLOAT
      },
      fearful: {
        type: Sequelize.FLOAT
      },
      angry: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('images');
  }
};
