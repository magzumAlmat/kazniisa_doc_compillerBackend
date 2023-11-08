const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const Subtitle = require('./Subtitle');

const Title = sequelize.define('Title', {
  name: DataTypes.STRING,
}, {
  timestamps: true, // Enable timestamps
});


Title.hasMany(Subtitle);

module.exports = Title;
