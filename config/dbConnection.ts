const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  port: 3305,
  password: 'passw0rd',
  database: 'homework',
});

export default { connection };
