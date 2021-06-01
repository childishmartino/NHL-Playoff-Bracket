const Sequelize = require('sequelize');
require('dotenv').config();
var mysql = require('mysql2');
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else(
  connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'playoffs_db'
  })
)

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
connection.connect();
module.exports = connection;

module.exports = sequelize;
