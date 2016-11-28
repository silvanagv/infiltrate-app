'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Skills',
      'UserId',
      {
        type: Sequelize.INTEGER
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
