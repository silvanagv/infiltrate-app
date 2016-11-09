'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Works', 'startDate'),
    queryInterface.removeColumn('Works', 'endDate'),
    queryInterface.addColumn(
      'Works',
      'startDate',
      Sequelize.DATE
    ),
    queryInterface.addColumn(
      'Works',
      'endDate',
      Sequelize.DATE
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
