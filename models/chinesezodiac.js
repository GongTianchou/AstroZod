const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ChineseZodiac extends Model {}

ChineseZodiac.init(
  {
    animalName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    luckyNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    luckyColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    luckyFlowers: {
      type: DataTypes.DATE,
      allowNull: false,
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
    modelName: 'ChineseZodiac',
  }
);

module.exports = ChineseZodiac;