const Pool = require('pg').Pool

const pool = new Pool({
  user: 'teyenike',
  host: 'localhost',
  password: '',
  port: 5432,
  database: 'task',
});

module.exports = pool