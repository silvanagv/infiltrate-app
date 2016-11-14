'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Users',
      'username',
      {
        type: Sequelize.STRING
            }
    ),
    queryInterface.addColumn(
      'Users',
      'password',
      {
        type: Sequelize.STRING,
        }
    ),
    queryInterface.addColumn(
      'Users',
      'admin',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
