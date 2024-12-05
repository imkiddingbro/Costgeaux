const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const prompt = require("prompt-sync")();

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

console.log(
  "You are a manager looking to update one of your employees states because they recently moved."
);

var question1a = prompt("Input the employees name.\n");
console.log(question1a);
var question1b = prompt("Input the employees new city.\n");
console.log(question1b);
var question1c = prompt("Input the employees position.\n");
console.log(question1c);
