'use strict';
module.exports = function(sequelize, DataTypes) {
  var SkillUser = sequelize.define('SkillUser', {
    SkillId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        SkillUser.belongsTo(models.Skill, {foreignKey: 'SkillId'});
        SkillUser.belongsTo(models.User, {foreignKey: 'UserId'});
      }
    }
  });
  return SkillUser;
};
