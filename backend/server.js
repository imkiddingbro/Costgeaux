const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 5173;

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
    console.log("Connected to MySQL database");
  }
});

db.query("SELECT * FROM costgeauxdb.product", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});

// API Route to Insert Inventory
app.post("/api/inventory", (req, res) => {
  const { name, quantity, price } = req.body;
  const sql = "INSERT INTO inventory (name, quantity, price) VALUES (?, ?, ?)";
  db.query(sql, [name, quantity, price], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Database error");
    } else {
      res.send("Inventory added successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});