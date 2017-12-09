'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('gifs', [
      {
        emotion: "angry",
        url: "https://media.giphy.com/media/SbIhCmbZJ7AMo/giphy.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        emotion: "happy",
        url: "https://media.giphy.com/media/kEKcOWl8RMLde/giphy.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        emotion: "neutral",
        url: "https://media.giphy.com/media/T69PZwr8XKdwc/giphy.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        emotion: "surprised",
        url: "https://media.giphy.com/media/1Zt3z4uEBPZQY/giphy.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        emotion: "fearful",
        url: "https://media.giphy.com/media/14ut8PhnIwzros/giphy.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        emotion: "sad",
        url: "https://media.giphy.com/media/10tIjpzIu8fe0/giphy.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('gifs', null, {});
  }
};
