class User {
  static async creare () {
    const insertQuery = `
    INSERT INTO users (first_name, last_name, email, tel)
    VALUES (${firstName},${lastName},${email},${tel},)
    RETURNING *`;
    try {
      const createdUsers = await User.pool.query(insertQuery);
      console.log('createdUsers :>> ', createdUsers);
      return createdUsers;
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
  static getAll () {}
  static getById () {}
  static updateById () {}
  static deleteById () {}
}
module.exports = User;
