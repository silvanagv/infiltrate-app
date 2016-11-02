'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define('Skill', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    levelOfProficiency: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Skill.belongsTo(models.User, {foreignKey: 'UserId'});
      }
    }
  });
  return Skill;
};
