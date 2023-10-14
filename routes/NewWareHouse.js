// routes/NewWarehouse.js
const express = require("express");
const router = express.Router();
const { validateWarehouseData } = require("../validation");
const knex = require("../knexfile"); // Import Knex configuration

// Define a POST route to create a new warehouse
router.post("/warehouses", async (req, res) => {
  try {
    // Validate the request body
    const validData = validateWarehouseData(req.body);
    if (!validData) {
      return res
        .status(400)
        .json({ error: "Invalid or missing data in the request body" });
    }

    // new warehouse data into the database
    const [warehouseId] = await knex("warehouses").insert(validData);

    // Fetch the newly inserted warehouse record
    const newWarehouse = await knex("warehouses")
      .where("id", warehouseId)
      .first();

    // Return a success response with the new warehouse data
    return res.status(201).json(newWarehouse);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
});

module.exports = router;
