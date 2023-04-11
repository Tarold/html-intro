module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('phones', {
      type: 'check',
      fields: ['year', 'ram', 'screen_size'],
      where: {
        year: {
          [Sequelize.Op.and]: [
            { [Sequelize.Op.lte]: Number(new Date().getFullYear()) },
            Sequelize.where(Sequelize.cast(Sequelize.col('year'), 'TEXT'), {
              [Sequelize.Op.regexp]: '^\\d{4}$',
            }),
          ],
        },
        ram: {
          [Sequelize.Op.regexp]: '^\\d+ \\w+$',
        },
        screen_size: {
          [Sequelize.Op.regexp]: '^\\d+x\\d+$',
        },
      },
      name: 'phones_check',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('phones', 'phones_check');
  },
};
