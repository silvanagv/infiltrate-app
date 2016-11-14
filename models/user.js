'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    blog: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    github: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Education);
        User.hasMany(models.Work);
        User.hasMany(models.SkillUser);
        User.belongsToMany(models.Skill, {through: models.SkillUser});
      }
    }
  });
  return User;
};
