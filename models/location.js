'use strict';
module.exports = function(sequelize, DataTypes) {
  var location = sequelize.define('location', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.location.belongsToMany(models.map, { through: models.mapslocations })
      }
    }
  });
  return location;
};