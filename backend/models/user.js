'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      pNumber: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          is: ['^(^\\+62\\s?|^0)(\\d{3,4}-?){2}\\d{3,4}$', 'g'],
        },
      },
      fName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      lName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      dobDay: DataTypes.STRING,
      dobMonth: DataTypes.STRING,
      dobYear: DataTypes.STRING,
      gender: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          is: [
            '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$',
            'g',
          ],
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
