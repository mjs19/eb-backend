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
    return queryInterface.bulkInsert('images', [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Michael_Phelps_Rio_Olympics_2016.jpg',
        fave: false,
        happy: 0.55,        
        surprised: 0.07,        
        sad: 0.04,
        fearful: 0.11,
        angry: 0.08,
        neutral: 0.16,
        createdAt: new Date(),
        updatedAt: new Date(),        
      },
      {
        url: 'http://mystic-investigations.w4lizsrnr.netdna-cdn.com/christmas-blog/wp-content/uploads/2011/12/Santa-Claus.jpg',
        fave: false,
        happy: 0.05,        
        surprised: 0.72,        
        sad: 0.10,
        fearful: 0.025,
        angry: 0.025,
        neutral: 0.08,  
        createdAt: new Date(),
        updatedAt: new Date(),      
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('images', null, {});
    
  }
};
