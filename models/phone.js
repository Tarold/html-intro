'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Phone.init(
    {
      model: { type: DataTypes.STRING(64), allowNull: false },
      brand: { type: DataTypes.STRING(64), allowNull: false },
      year: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: { is: /^\d{4}$/, max: Number(new Date().getFullYear()) },
      },
      ram: {
        type: DataTypes.STRING(32),
        allowNull: false,
        validate: { is: /^\d+ \w+$/ },
      },
      processor: { type: DataTypes.STRING(64), allowNull: false },
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
