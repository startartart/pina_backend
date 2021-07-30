var mysql = require('mysql');

const config = {
    host     : 'localhost',
    user     : 'root',
    password : '0000',
    database : 'pina_db',
    connectionLimit : 10
  };
  
  module.exports = config;