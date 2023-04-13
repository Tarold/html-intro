'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate (models) {
      Phone.belongsTo(models.Processor, {
        foreignKey: 'processorsId',
      });
    }
  }
  Phone.init(
    {
      model: { type: DataTypes.STRING(64), allowNull: false },
      brand: { type: DataTypes.STRING(64), allowNull: false },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { is: /^\d{4}$/, max: Number(new Date().getFullYear()) },
      },
      ram: {
        type: DataTypes.STRING(32),
        allowNull: false,
        validate: { is: /^\d+ \w+$/ },
      },
      screenSize: {
        type: DataTypes.STRING(32),
        allowNull: false,
        validate: { is: /^\d+x\d+$/ },
      },
      isNfc: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: 'phone',
      underscored: true,
    }
  );
  return Phone;
};
