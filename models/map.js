'use strict';
module.exports = function(sequelize, DataTypes) {
  var map = sequelize.define('map', {
    name: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    style: DataTypes.STRING,
    topic: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.map.belongsToMany(models.location, { through: models.mapslocations })
        models.map.belongsToMany(models.tag, { through: models.mapstags })
        models.map.belongsToMany(models.user, { through: models.usersmaps })
      }
    }
  });
  return map;
};