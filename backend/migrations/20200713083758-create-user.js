'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      pNumber: {
        type: Sequelize.STRING,
        unique: true,
      },
      fName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lName: {
        type: Sequelize.STRING,
      },
      dobDay: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dobMonth: {
        type: Sequelize.STRING,
      },
      dobYear: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
        isIn: [['m', 'f']],
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
