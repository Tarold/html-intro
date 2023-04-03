'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'phones',
      [
        {
          model: '13 Pro',
          brand: 'Xiaomi',
          year: 2026,
          ram: '4 Gb',
          processor: 'MiliTech',
          screen_size: '1920x1080',
          nfc: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phones', null, {});
  },
};
