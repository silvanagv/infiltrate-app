'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    blog: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    github: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Education);
        User.hasMany(models.Work);
        User.hasMany(models.Skill);

      }
    }
  });
  return User;
};