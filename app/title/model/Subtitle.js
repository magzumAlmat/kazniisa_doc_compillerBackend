const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Title = require('./Title')

const Subtitle = sequelize.define('Subtitle', {
  name: DataTypes.STRING,
  p_number: DataTypes.STRING,
  text: DataTypes.TEXT,
});

// Subtitle.belongsTo(Title);

module.exports = Subtitle;
