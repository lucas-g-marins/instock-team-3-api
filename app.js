const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const knex = require("knex")(require("./knexfile"));

app.use(express.json());

// Create a router for the inventory API
const inventoryRouter = express.Router();

// ... (your existing routes for retrieving and creating inventory items)

// Define a new route for retrieving inventories for a given warehouse ID
inventoryRouter.get("/:warehouseId/inventories", async (req, res) => {
  const warehouseId = req.params.warehouseId;

  try {
    // Use Knex to query the "inventory" table in your database
    const inventories = await knex("inventory")
      .select("id", "item_name", "category", "status", "quantity")
      .where("warehouse_id", warehouseId);

    if (!inventories || inventories.length === 0) {
      // If no inventories are found for the given warehouse, return a 404 Not Found response
      res
        .status(404)
        .json({ error: "No inventories found for this warehouse" });
    } else {
      // If inventories are found, return a 200 OK response with the inventory list
      res.status(200).json(inventories);
    }
  } catch (error) {
    // Handle any unexpected errors with a 500 Internal Server Error response
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Use the inventory router for routes starting with "/api/inventories"
app.use("/api/inventories", inventoryRouter);

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
