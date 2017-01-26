const mysql = require('mysql');

module.exports = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Loonylupin87',
  database : 'burger_db'
});
