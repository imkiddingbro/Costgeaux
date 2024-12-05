import React, { useState } from "react";

const Inventory = () => {
  const [name, setName] = useState("");
  const [amount, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newInventory = { name, amount, price };

    try {
      const response = await fetch("http://localhost:5000/api/inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInventory),
      });

      if (response.ok) {
        alert("Inventory added successfully");
        setName("");
        setQuantity("");
        setPrice("");
      } else {
        alert("Error adding inventory");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding inventory");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{ marginTop: "100px", display: "flex", flexDirection: "row" }}
      >
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label style={{ paddingLeft: "425px" }}>
          Product:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </label>
        <label style={{ paddingLeft: "425px" }}>
          Quantity:
          <input
            type="number"
            value={amount}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </label>
      </div>
      <button
        type="submit"
        style={{
          display: "flex",
          marginTop: "20px",
          float: "right",
        }}
      >
        Add Inventory
      </button>
      <div>
        <label style={{ display: "flex" }}>Price:</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{ marginTop: "20px", display: "flex" }}>
        Add Product
      </button>
    </form>
  );
};

export default Inventory;
