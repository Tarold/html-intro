'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('users', {
      fields: ['gender'],
      type: 'check',
      where: {
        gender: ['male', 'female', 'other'],
      },
      name: 'users_gender_check_constraint',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'users',
      'users_gender_check_constraint'
    );
  },
};
