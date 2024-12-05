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

    console.log("Welcome to the grocery store! Let's process your order.");

    // Prompt user for input
    var customerName = prompt("Enter your name: ");
    var productName = prompt("Enter the product name: ");
    var quantity = parseInt(prompt("Enter the quantity: "));

    // Check if product exists and has enough quantity
    const productCheckQuery = `
      SELECT p_id, price, p_Quantity
      FROM Product
      WHERE p_name = ? AND p_Quantity >= ?;
    `;

    db.query(productCheckQuery, [productName, quantity], (err, results) => {
      if (err) {
        console.error("Error checking product availability:", err);
      } else if (results.length === 0) {
        console.log("Not enough product quantity or product does not exist.");
      } else {
        const productId = results[0].p_id;
        const productPrice = results[0].price;

        // Get customer ID based on their name
        const customerQuery = "SELECT c_id FROM Customer WHERE c_name = ?";
        db.query(customerQuery, [customerName], (err, customerResults) => {
          if (err) {
            console.error("Error finding customer:", err);
          } else if (customerResults.length === 0) {
            console.log("Customer not found.");
          } else {
            const customerId = customerResults[0].c_id;

            // Insert the product into the cart
            const insertCartQuery = `
              INSERT INTO Cart (customer_id, product_id, item_count, total_price)
              VALUES (?, ?, ?, ?);
            `;
            const totalPrice = quantity * productPrice;

            db.query(
              insertCartQuery,
              [customerId, productId, quantity, totalPrice],
              (err, insertResults) => {
                if (err) {
                  console.error("Failed to update cart:", err);
                } else {
                  console.log("Product added to cart successfully!");

                  // Update the product quantity in the Product table
                  const updateProductQuery = `
                    UPDATE Product
                    SET p_Quantity = p_Quantity - ?
                    WHERE p_id = ?;
                  `;

                  db.query(updateProductQuery, [quantity, productId], (err, updateResults) => {
                    if (err) {
                      console.error("Failed to update product quantity:", err);
                    } else {
                      console.log("Product quantity updated successfully!");
                    }
                    db.end(); // Close the connection after the transaction is complete
                  });
                }
              }
            );
          }
        });
      }
    });
  }
});
