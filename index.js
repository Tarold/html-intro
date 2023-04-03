const {
  phone: Phone,
  Sequelize: { Op },
} = require('./models');

(async () => {
  //додавання нового телефону

  const onePhone = {
    model: '13 Pro',
    brand: 'Xiaomi',
    year: 2023,
    ram: '4 Gb',
    processor: 'MiliTech',
    screenSize: '1920x1080',
    isNfc: false,
  };

  const createdPhone = await Phone.create(onePhone);
  console.log('createdStudent :>> ', createdPhone.get());

  //отримання списку телефонів (* 3-я сторінка при перегляді по 4 телефони на сторінці, упорядкованих за роком виробництва),

  // const foundPhones = await Phone.findAll({ offset: 12, limit: 4, raw: true, order: ['year'] });
  // console.log('foundPhones :>> ', foundPhones);

  //*отримання списку телефонів певного року видання,

  // const yearOfPhoneCreate = 2023;

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   where: { year: yearOfPhoneCreate },
  // });

  // console.log('foundPhones :>> ', foundPhones);

  //*отримання списку телефонів старше 2020 року випуску,

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   where: { year: { [Op.gt]: 2020 } },
  // });

  // console.log('foundPhones :>> ', foundPhones);

  //оновлення: додати нфс всім телефонам 2021 року випуску,

  // const body = { isNfc: true };

  // const result = await Phone.update(body, {
  //   raw: true,
  //   where: { year: { [Op.eq]: 2021 } },
  //   returning: true,
  // });

  // console.log('result :>> ', result);

  //видалення телефонів 2010 року випуску.

  // const deletedPhonesCount = await Phone.destroy({
  //   where: { year: { [Op.eq]: 2010 } },
  // });

  // console.log('deletedPhonesCount :>> ', deletedPhonesCount);
})();
