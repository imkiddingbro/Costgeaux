const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  database: "costgeauxdb",
  user: "root",
  password: "password",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database\n");
  }
});

db.query(
  "INSERT INTO product VALUES('12345', 'peanuts', '0.75', '20');",
  function (err, result) {
    if (err) throw err;
    console.log("Query Updated Successfully\n");
  }
);

db.query(
  "SELECT * FROM costgeauxdb.product WHERE p_id LIKE 'apple'",
  function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  }
);
