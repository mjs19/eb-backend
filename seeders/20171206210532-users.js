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
    return queryInterface.bulkInsert('users', [
      {
        first_name: "Marita",
        last_name: "Sailor ",
        email: "marita.sailor@capitalone.com",
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Sahana",
        last_name: "Arya ",
        email: "sahana.arya@capitalone.com",
        password: "test",
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

    return queryInterface.bulkDelete('users', null, {});
    
  }
};
