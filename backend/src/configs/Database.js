const mysql = require("mysql");
require("dotenv/config");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "mydatabase",
    });
  }

  TestConnection() {
    this.connection.connect((err) => {
      if (err) return err;
      console.log("Database connected");
    });
  }
}

module.exports = Database;
