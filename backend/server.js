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
      "You are a manager looking to update one of your employees states because they recently moved.\n"
    );

    let question1a;
    let question1b;
    let question1c;
    let question1d;

    // Prompt user for input
    while (!question1a && !question1b && !question1c && !question1d) {
      question1a = prompt("Input the employees name. \tEX: 'Stacy'\n");
      if (question1a) {
        question1b = prompt(
          "Input the employees new city. \tEX: 'New Orleans'\n"
        );
      } else {
        console.log("Invalid Input.");
      }
      if (question1b) {
        question1c = prompt("Input the employees state. \tEX: 'TX'\n");
      } else {
        console.log("Invalid Input.");
      }
      if (question1c) {
        question1d = prompt("Input the employees position. \tEX: 'cashier'\n");
      } else {
        console.log("Invalid Input.");
      }
      if (question1d) {
        const updateQuery1 =
          "UPDATE Employee SET e_City = ?, e_State = ? WHERE e_name = ? AND e_Position = ?";
        db.query(
          updateQuery1,
          [question1b, question1c, question1a, question1d],
          (err, results) => {
            if (err) {
              console.error("Failed to update employee record:", err);
            } else if (results.affectedRows === 0) {
              console.log(
                "No employee found with the given name and position."
              );
            } else {
              console.log("Employee record updated successfully!");
            }

            // Close the database connection
            db.end();
          }
        );
      } else {
        console.log("Invalid Input");
      }
    }
  }
  // Close the database connection
  db.end();
});
