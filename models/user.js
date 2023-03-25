class User {
  static async create ({ firstName, lastName, email, tel }) {
    // прописати sql-запит

    const insertQuery = `
      INSERT INTO users (first_name, last_name, email, tel)
      VALUES (${firstName}, ${lastName}, ${email}, ${tel})
      RETURNING *;
    `;
    try {
      // виконати запит
      const createdUser = await User.pool.query(insertQuery);
      console.log('createdUser :>> ', createdUser.rows[0]);
      return createdUser.rows[0];
    } catch (err) {
      // повернути результат або помилку
      console.log('err :>> ', err);
    }
  }
  static getAll () {}
  static getById () {}
  static updateById () {}
  static deleteById () {}
}

module.exports = User;
