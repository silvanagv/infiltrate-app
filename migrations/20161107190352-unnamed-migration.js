'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
queryInterface.changeColumn(
  'Educations',
  'startDate',
  {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: true
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
