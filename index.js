const { Pool } = require('pg');

const connectionConfig = {
  host: 'localhost',
  port: '5432',
  database: 'test',
  user: 'postgres',
  password: '121212',
};

const pool = new Pool(connectionConfig);

pool.connect(err => {
  if (!err) {
    console.log('DB connection success');
  }
});

pool.on('beforExit', () => pool.end());

pool.query('SELECT * FROM users;', (err, data) => {
  if (!err) {
    console.log('data :>> ', data.rows);
  }
});

const id = 1;

(async () => {
  try {
    const data = await pool.query('SELECT * FROM students WHERE id=$1', [id]);
    console.log('object :>> ', data.rows);
  } catch (err) {
    console.log('err :>> ', err);
  }
})();
