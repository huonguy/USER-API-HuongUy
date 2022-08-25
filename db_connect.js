const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(
//   "db_User", //database name
//   "root", //username
//   "admin123", //password
//   {
//     host: "127.0.0.1", //url sql server, RDMS
//     port: "3308", //port
//     dialect: "mysql", //sql server dang su dung
//   }
// );

const sequelize = new Sequelize(
  "heroku_51b5dca58ca36ed", //database name
  "b6bc9bec7ff7d5", //username
  "6244cff8", //password
  {
    host: "us-cdbr-east-06.cleardb.net", //url sql server, RDMS
    port: "3306", //port
    dialect: "mysql", //sql server dang su dung
  }
);

module.exports = sequelize;
