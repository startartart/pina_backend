var mysql      = require('mysql');
var config = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'pina_db',
  connectionLimit : 10,
  dateStrings : 'datetime'
});

config.connect();
module.exports = config;