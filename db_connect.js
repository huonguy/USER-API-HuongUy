const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "db_User", //database name
  "root", //username
  "admin123", //password
  {
    host: "127.0.0.1", //url sql server, RDMS
    port: "3308", //port
    dialect: "mysql", //sql server dang su dung
  }
);

module.exports = sequelize;