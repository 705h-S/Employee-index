const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
);

module.exports = connection;