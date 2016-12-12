'use strict';
module.exports = function(sequelize, DataTypes) {
  var mapslocations = sequelize.define('mapslocations', {
    mapId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return mapslocations;
};