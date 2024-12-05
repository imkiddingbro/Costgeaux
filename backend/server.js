const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const prompt = require("prompt-sync")({ sigint: true });

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

    console.log(
      "You are a manager looking to update one of your employees states because they recently moved."
    );

    // Prompt user for input
    var question1a = prompt("Input the employees name.\n");
    var question1b = prompt("Input the employees new city.\n");
    var question1c = prompt("Input the employees state.\n");
    var question1d = prompt("Input the employees position.\n");

    const updateQuery =
      "UPDATE Employee SET e_City = ?, e_State = ?, e_Position = ? WHERE e_name = ?";
    db.query(
      updateQuery,
      [question1b, question1c, question1d, question1a],
      (err, results) => {
        if (err) {
          console.error("Failed to update employee record:", err);
        } else if (results.affectedRows === 0) {
          console.log("No employee found with the given name.");
        } else {
          console.log("Employee record updated successfully!");
        }

        // Close the database connection
        db.end();
      }
    );
  }
});
