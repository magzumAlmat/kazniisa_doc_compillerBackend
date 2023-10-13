const {DataTypes} = require('sequelize')
const sequelize = require('../../../config/db')

const AuthCode = sequelize.define('AuthLink', {
  email: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  link:{
    type: DataTypes.STRING,
    allowNull: false,
  },

  valid_till:{
    type: DataTypes.DATE,
    allowNull: false,
  },
},{
  timestamps:false,}
)


module.exports = AuthCode;
