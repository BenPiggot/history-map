'use strict';
module.exports = function(sequelize, DataTypes) {
  var usersmaps = sequelize.define('usersmaps', {
    userId: DataTypes.INTEGER,
    mapId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usersmaps;
};