const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Zodiacsign extends Model {}

Zodiacsign.init(
  {
    zodiacSign: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    currentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Compatibility: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prediction:{
      type:Datatype.STRING,
      allowNull:false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Zodiacsign',
  }
);

module.exports = Zodiacsign;