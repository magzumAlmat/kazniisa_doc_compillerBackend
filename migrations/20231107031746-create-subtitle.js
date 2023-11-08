const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Subtitles', {
      // Define your attributes here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      p_number: DataTypes.STRING,
      text: DataTypes.TEXT,
      
      TitleId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Titles', // This should match your Title model's name
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });

    // Add a foreign key constraint
    await queryInterface.addConstraint('Subtitles', {
      fields: ['TitleId'],
      type: 'foreign key',
      references: {
        table: 'Titles',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Subtitles');
  },
};
