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

    const insertQuery = "INSERT INTO Customer (c_name, c_City, c_State) VALUES (?, ?, ?)";
    const selectQuery = "SELECT * FROM Customer WHERE c_id = ?";

    try {
      const results = await new Promise((resolve, reject) =>
        db.query(insertQuery, [customerName, city, state], (err, res) =>
          err ? reject(err) : resolve(res)
        )
      );
      if (results.affectedRows === 0) {
        console.log("Failed to update customer record.\n");
      } else {
        console.log("Customer record updated successfully!\n");
        // Fetch the customers results 
        const [newCustomer] = await new Promise((resolve, reject) =>
          db.query(selectQuery, [results.insertId], (err, res) =>
            err ? reject(err) : resolve(res)
          )
        );
        console.log("New Customer added:\n");
        console.log(`ID: ${newCustomer.c_id}`);
        console.log(`Name: ${newCustomer.c_name}`);
        console.log(`City: ${newCustomer.c_City}`);
        console.log(`State: ${newCustomer.c_State}\n`);
      }
    } catch (error) {
      console.error("Failed to update customer record:", error);
    }
  }

  async function updateProductStock() {
    console.log("You are an employee inputting products into your inventory.");

    const productName = prompt("Input the product name (EX: 'lamb'): ");
    const quantity = prompt("Input the product amount (EX: '25'): ");
    

    const checkQuery = "SELECT * FROM Product WHERE p_name = ?";
    const updateQuery = "UPDATE Product SET p_Quantity = p_Quantity + ? WHERE p_name = ?";
    const addQuery = "INSERT INTO Product (p_name, price, p_Quantity, p_section) VALUES (?, ?, ?, ?)";
    try {

      const [rows] = await new Promise((resolve, reject) =>
        db.query(checkQuery, [productName], (err, res) =>
          err ? reject(err) : resolve(res)
        )
      );
      
      if(rows) {
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
        console.log("No inventory avalible for " + productName + ". Please enter a price and section: ");

        const price = prompt("Input the product price (EX: 2.00): ");
        const section = prompt("Input the product section (EX: 'Produce Section'): ");

        const results2 = await new Promise((resolve, reject) =>
          db.query(addQuery, [productName, price, quantity, section], (err, res) =>
            err ? reject(err) : resolve(res)
          )
        );
        if (results2.affectedRows === 0) {
          console.log("Product could not be updated.\n");
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
  
  async function updateCart() {
    console.log("You are a customer adding products into your cart.");

    const customerName = prompt("Enter your name (EX: 'Stacy'): ");
    const productName = prompt("Input the product name (EX: 'lamb'): ");
    const quantity = prompt("Input the product amount (EX: '25'): ");
    
    const checkQuery = "SELECT * FROM Product WHERE p_name = ?";
    const getCustomerQuery = "SELECT c_id FROM Customer WHERE c_name =?";
    const purchaseQuery =`
                INSERT INTO Cart (customer_id, product_id, item_count, total_price)
                SELECT c.c_id, p.p_id, ?, ? * p.price AS total_price
                FROM Customer c, Product p
                WHERE c.c_name = ? AND p.p_name = ? AND p.p_Quantity >= ?`;
    const updateQuery = "UPDATE Product SET p_Quantity = p_Quantity - ? WHERE p_name = ?";
    try {

      const [rows] = await new Promise((resolve, reject) =>
        db.query(checkQuery, [productName], (err, res) =>
          err ? reject(err) : resolve(res)
        )
      );
      
      const [customerRows] = await new Promise((resolve, reject) =>
        db.query(getCustomerQuery, [customerName], (err, res) =>
            err ? reject(err) : resolve(res)
        )
      );
      
      if (customerRows.length === 0){
        console.log("No Customer found with the given name.\n");
        updateCart();
      }

      if(rows) {
        const results1 = await new Promise((resolve, reject) =>
          db.query(updateQuery, [quantity, productName], (err, res) =>
            err ? reject(err) : resolve(res)
          )
        );
        if (results1.affectedRows === 0) {
          console.log("No product found with the given name.\n");
        } 
        const results2 = await new Promise((resolve, reject) =>
          db.query(purchaseQuery, [quantity, quantity, customerName, productName, quantity], (err, res) =>
            err ? reject(err) : resolve(res)
          )
        );
        if (results2.affectedRows === 0) {
          console.log("Product could not be added.\n");
        } else {
          console.log("Your Cart has been updated with the product(s)!\n");
        }
      } else {
        console.log("No inventory avalible for " + productName + ".");
      }
        
    } catch (error) {
      console.error("Failed to update product stock record:", error);
    }
  }
  
  // Run the scripts
  async function main() {
    
    //await updateEmployee();
    await addCustomer();
   // await updateProductStock();
    //await deleteEmployee();
    //await updateCart();
    db.end(() => console.log("Database connection closed."));
  }

  main();
});