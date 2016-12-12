'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [8, 50]
      }
    }
  }, {
    hooks: {
      beforeCreate: function(user, options, callback) {
        bcrypt.hash(user.password, 10, function(err, hash) {
          if (err) { throw err }
          user.password = hash;
          callback(null, user)
        })
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.user.belongsToMany(models.map, { through: models.usersmaps })
      }
    }
  });
  return user;
};