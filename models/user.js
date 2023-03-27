class User {
  static async create ({ firstName, lastName, email, tel }) {
    // прописати sql-запит

    const insertQuery = `
      INSERT INTO users (first_name, last_name, email, tel)
      VALUES ('${firstName}', '${lastName}', '${email}', '${tel}')
      RETURNING *;
    `;
    try {
      // виконати запит
      const createdUser = await User.pool.query(insertQuery);

      return createdUser.rows[0];
    } catch (err) {
      // повернути результат або помилку
      throw new Error(err.detail);
    }
  }
  static async getAll ({ limit, offset }) {
    const selectQuery = `
     SELECT *
     FROM users
     ORDER BY id
     LIMIT ${limit} OFFSET ${offset};
   `;
    try {
      const foundUsers = await User.pool.query(selectQuery);
      return foundUsers.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static getById () {}
  static async updateById (body, userId) {
    let set = '';
    let returning = '';
    for (const [key, value] of Object.entries(body)) {
      if (set !== '') {
        set += ', ';
      }
      if (returning !== '') {
        returning += ', ';
      }
      switch (key) {
        case 'firstName':
          set += `first_name = '${value}'`;
          returning += `first_name`;
          break;
        case 'lastName':
          set += `last_name = '${value}'`;
          returning += `last_name`;
          break;
        case 'email':
          set += `email = '${value}'`;
          returning += `email`;
          break;
        case 'tel':
          set += `tel = '${value}'`;
          returning += `tel`;
          break;

        default:
          break;
      }
    }

    const updateQuery = `
     UPDATE users
     SET ${set} 
     WHERE id=${userId}
     RETURNING ${returning};
   `;

    try {
      const updateUsers = await User.pool.query(updateQuery);
      return updateUsers.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async deleteById (id) {
    const deleteQuery = `
      DELETE FROM users
      WHERE id = ${id}
      RETURNING id;
    `;

    try {
      const deletedUser = await User.pool.query(deleteQuery);

      return deletedUser.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async getPhonesById (id, model, first_date, second_date) {
    const selectQuery = `
    SELECT phones.model, phones.color, phones.cost
    FROM phones
    JOIN shopping ON phones.id=shopping.phone_id
    JOIN users ON users.id=shopping.user_id
    WHERE users.id=${id} 
        ${model ? `AND phones.model='${model}'` : ''}
        ${
          first_date !== undefined && second_date !== undefined
            ? `AND shopping.date BETWEEN '${first_date}'AND'${second_date}'`
            : ''
        };
    `;
    try {
      const userPhones = await User.pool.query(selectQuery);

      return userPhones.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
}

module.exports = User;
