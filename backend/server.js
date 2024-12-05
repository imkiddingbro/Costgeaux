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
    return;
  }
  console.log("Connected to MySQL database\n");

  async function updateEmployee() {
    console.log(
      "You are a manager looking to update one of your employees' states because they recently moved."
    );

    const employeeName = prompt("Input the employee's name (EX: 'Stacy'): ");
    const newCity = prompt("Input the employee's new city (EX: 'Dallas'): ");
    const newState = prompt("Input the employee's state (EX: 'TX'): ");
    const position = prompt("Input the employee's position (EX: 'employee'): ");

    const query =
      "UPDATE Employee SET e_City = ?, e_State = ? WHERE e_name = ? AND e_Position = ?";
    try {
      const results = await new Promise((resolve, reject) =>
        db.query(query, [newCity, newState, employeeName, position], (err, res) =>
          err ? reject(err) : resolve(res)
        )
      );
      if (results.affectedRows === 0) {
        console.log("No employee found with the given name and position.\n");
      } else {
        console.log("Employee record updated successfully!\n");
      }
    } catch (error) {
      console.error("Failed to update employee record:", error);
    }
  }

  async function addCustomer() {
    console.log("You are a new customer. Input your information.");

    const customerName = prompt("Enter your name (EX: 'Stacy'): ");
    const city = prompt("Enter your city (EX: 'Dallas'): ");
    const state = prompt("Enter your state (EX: 'TX'): ");

    const query = "INSERT INTO Customer (c_name, c_City, c_State) VALUES (?, ?, ?)";
    try {
      const results = await new Promise((resolve, reject) =>
        db.query(query, [customerName, city, state], (err, res) =>
          err ? reject(err) : resolve(res)
        )
      );
      console.log("Customer record updated successfully!\n");
    } catch (error) {
      console.error("Failed to update customer record:", error);
    }
  }

  async function updateProductStock() {
    console.log("You are an employee inputting products into your inventory.");

    const productName = prompt("Input the product name (EX: 'lamb'): ");
    const quantity = prompt("Input the product amount (EX: '25'): ");

    const query =
      "UPDATE Product SET p_name = ?, p_Quantity = ? WHERE p_name = ?";
    try {
      const results = await new Promise((resolve, reject) =>
        db.query(query, [productName, quantity, productName], (err, res) =>
          err ? reject(err) : resolve(res)
        )
      );
      if (results.affectedRows === 0) {
        console.log("No product found with the given name.\n");
      } else {
        console.log("Product stock record updated successfully!\n");
      }
    } catch (error) {
      console.error("Failed to update product stock record:", error);
    }
  }

  async function main() {
    await updateEmployee();
    await addCustomer();
    await updateProductStock();
    db.end(() => console.log("Database connection closed."));
  }

  main();
});