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

    // Begin First Prompt

    console.log(
      "You are a manager looking to update one of your employees states because they recently moved."
    );

    let question1a;
    let question1b;
    let question1c;
    let question1d;

    // Prompt user for input
    while (!question1a && !question1b && !question1c && !question1d) {
      question1a = prompt("Input the employees name (EX: 'Stacy'): ");
      if (question1a) {
        question1b = prompt("Input the employees new city (EX: 'Dallas'): ");
      } else {
        console.log("Invalid Input.");
      }
      if (question1b) {
        question1c = prompt("Input the employees state (EX: 'TX'): ");
      } else {
        console.log("Invalid Input.");
      }
      if (question1c) {
        question1d = prompt("Input the employees position (EX: 'employee'): ");
      } else {
        console.log("Invalid Input.");
      }
      if (question1d) {
        const updateQuery1 =
          "UPDATE Employee SET e_City = ?, e_State = ? WHERE e_name = ? AND e_Position = ?";
        db.query(updateQuery1, [question1b, question1c, question1a, question1d], (err, results) => {
            if (err) {
              console.error("Failed to update employee record:", err);
            } else if (results.affectedRows === 0) {
              console.log(
                "No employee found with the given name and position.\n"
              );
            } else {
              console.log("Employee record updated successfully!\n");
            }
          }
        );
      } else {
        console.log("Invalid Input");
      }
    }

    // Second Prompt
    console.log(
      "You are a new Customer. Input your information."
    );

    let question2a;
    let question2b;
    let question2c;

    // Prompt user for input
    while (!question2a && !question2b && !question2c) {
      question2a = prompt("Enter your name (EX: 'Stacy'): ");
      if (question2a) {
        question2b = prompt("Enter your city (EX: 'Dallas'): ");
      } else {
        console.log("Invalid Input.");
      }
      if (question2b) {
        question2c = prompt("Enter your state (EX: 'TX'): ");
      } else {
        console.log("Invalid Input.");
      }
      
      if (question2c) {
        const updateQuery2 =
          "INSERT INTO customer (c_name, c_City, c_State) VALUES (?, ?, ?)";
        db.query(updateQuery2, [question2a, question2b, question2c], (err, results) => {
            if (err) {
              console.error("Failed to update employee record:", err);
            } else if (results.affectedRows === 0) {
              console.log(
                "Could not update Query.\n"
              );
            } else {
              console.log("Customer record updated successfully!\n");
            }
          }
        );
      } else {
        console.log("Invalid Input");
      }
    }
    //test comment

    // Third Prompt

    // Fourth Prompt

    // Fifth Prompt
  }
  // Close the database connection
  db.end();
});
