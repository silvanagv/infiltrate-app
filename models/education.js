'use strict';
module.exports = function(sequelize, DataTypes) {
  var Education = sequelize.define('Education', {
    institutionName: DataTypes.STRING,
    qualification: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Education.belongsTo(models.User,
          {foreignKey: 'UserId'});
      }
    }
  });
  return Education;
};
