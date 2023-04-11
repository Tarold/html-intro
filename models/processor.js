'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Processor extends Model {
    static associate (models) {
      Processor.belongsTo(models.phone, {
        foreignKey: 'processorsId',
      });
    }
  }
  Processor.init(
    {
      family: { type: DataTypes.STRING, allowNull: false },
      socket: { type: DataTypes.STRING, allowNull: false },
      cores: { type: DataTypes.INTEGER, allowNull: false },
      threads: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Processor',
      underscored: true,
    }
  );
  return Processor;
};
