'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Education', 'startDate'),
    queryInterface.removeColumn('Education', 'endDate'),
    queryInterface.addColumn(
      'Education',
      'startDate',
      Sequelize.DATE
    ),
    queryInterface.addColumn(
      'Education',
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
