'use strict';
module.exports = function(sequelize, DataTypes) {
  var Work = sequelize.define('Work', {
    title: DataTypes.STRING,
    company: DataTypes.STRING,
    companyUrl: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    responsibilities: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Work.belongsTo(models.User, {foreignKey: 'UserId'});
      }
    }
  });
  return Work;
};
