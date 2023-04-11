'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('phones', {
      fields: ['year'],
      type: 'check',
      where: {
        year: {
          [Sequelize.Op.not]: null,
          [Sequelize.Op.regexp]: '^\\d{4}$',
          [Sequelize.Op.lte]: new Date().getFullYear(),
        },
      },
      name: 'year',
    });
    await queryInterface.addConstraint('phones', {
      fields: ['ram'],
      type: 'check',
      where: {
        ram: {
          [Sequelize.Op.regexp]: '^\\d+ \\w+$',
        },
      },
      name: 'format_check_ram',
    });

    await queryInterface.addConstraint('phones', {
      fields: ['screen_size'],
      type: 'check',
      where: {
        screen_size: {
          [Sequelize.Op.regexp]: '^\\d+x\\d+$',
        },
      },
      name: 'format_check_screen_size',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('phones', 'year');
    await queryInterface.removeConstraint('phones', 'ram');
    await queryInterface.removeConstraint('phones', 'screen_size');
  },
};
