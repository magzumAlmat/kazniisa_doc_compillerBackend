'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Revises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Не провен',
      },
      expiredDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Нет описания',
      },
      BannerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Banners',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', // or set to your preferred deletion behavior
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', // or set to your preferred deletion behavior
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
    await queryInterface.dropTable('Revises');
  },
};
