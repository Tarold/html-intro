'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      year: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      ram: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      processor: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      screen_size: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      is_nfc: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  },
};
