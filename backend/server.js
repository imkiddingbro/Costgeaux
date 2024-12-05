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
      if (results.affectedRows === 0) {
        console.log("Failed to update customer record.\n");
      } else {
        console.log("Customer record updated successfully!\n");
      }
    } catch (error) {
      console.error("Failed to update customer record:", error);
    }
  }

  aasync function updateProductStock() {
    console.log("You are an employee inputting products into your inventory.");

    const productName = prompt("Input the product name (EX: 'lamb'): ");
    
    const checkQuery = "SELECT * FROM Product WHERE p_name = ?";
    const updateQuery = "UPDATE Product SET p_Quantity = p_Quantity + ? WHERE p_name = ?";
    const addQuery = "INSERT INTO Product (p_name, price, p_Quantity, p_section) VALUES (?, ?, ?, ?)";

    try {
      // Check if the product already exists in the database
      const [rows] = await new Promise((resolve, reject) =>
        db.query(checkQuery, [productName], (err, res) =>
          err ? reject(err) : resolve(res)
        )
      );

      if (rows && Array.isArray(rows) && rows.length > 0) {
        // Product exists, prompt only for quantity
        const quantity = prompt("Input the product amount (EX: '25'): ");

        // Update product quantity in database
        const results1 = await new Promise((resolve, reject) =>
          db.query(updateQuery, [quantity, productName], (err, res) =>
            err ? reject(err) : resolve(res)
          )
        );

        if (results1.affectedRows === 0) {
          console.log("No product found with the given name.\n");
        } else {
          console.log("Product stock record updated successfully!\n");
        }
      } else {
        // Product does not exist, prompt for price and section along with name and quantity
        const quantity = prompt("Input the product amount (EX: '25'): ");
        const price = prompt("Input the product price (EX: 2.00): ");
        const section = prompt("Input the product section (EX: 'Produce Section'): ");

        // Insert new product into the database
        const results2 = await new Promise((resolve, reject) =>
          db.query(addQuery, [productName, price, quantity, section], (err, res) =>
            err ? reject(err) : resolve(res)
          )
        );

        if (results2.affectedRows === 0) {
          console.log("Product could not be added.\n");
        } else {
          console.log("New product added to inventory!\n");
        }
      }
    } catch (error) {
      console.error("Failed to update product stock record:", error);
    }
}


  async function deleteEmployee() {
    console.log("You are a manager. One of your employees quit. Remove them from the database.");

    const employeeName = prompt("Enter your employees name (EX: 'Stacy'): ");
    const city = prompt("Enter your city (EX: 'Dallas'): ");
    const state = prompt("Enter your state (EX: 'TX'): ");
    const employeePosition = prompt("Enter your employees position (EX: 'janitor'): ");

    const query = "DELETE FROM Employee WHERE e_name = ? AND e_City = ? AND e_State = ? AND e_Position = ?";
    try {
      const results = await new Promise((resolve, reject) =>
        db.query(query, [employeeName, city, state, employeePosition], (err, res) =>
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

  

  



  async function main() {
    
    //await updateEmployee();
    //await addCustomer();
    await updateProductStock();
    //await deleteEmployee();
    db.end(() => console.log("Database connection closed."));
  }

  main();
});