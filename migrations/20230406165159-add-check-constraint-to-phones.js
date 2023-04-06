'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('phones', 'year', {
      type: Sequelize.SMALLINT,
      validate: {
        isInt: true,
        max: new Date().getFullYear(),
      },
    });
    await queryInterface.addColumn('phones', 'ram', {
      type: Sequelize.STRING,
      validate: {
        is: /^\d+ \w+$/,
      },
    });
    await queryInterface.addColumn('phones', 'screen_size', {
      type: Sequelize.STRING,
      validate: {
        is: /^\d+x\d+$/,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('phones', 'year');
    await queryInterface.removeColumn('phones', 'ram');
    await queryInterface.removeColumn('phones', 'screen_size');
  },
};
