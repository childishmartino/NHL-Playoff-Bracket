const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bracket extends Model {}

Bracket.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    west1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    west2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    east1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    east2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    central1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    central2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    north1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    north2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    west_semi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    east_semi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    central_semi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    north_semi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    final1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    final2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bracket',
  }
);

module.exports = Bracket;
