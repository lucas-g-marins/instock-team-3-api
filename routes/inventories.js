const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventory-controller");

router.route("/").get(inventoryController.index);

router.route("/:id").get(inventoryController.inventoryItem);

router.route("/:id").put(inventoryController.editInventory);

module.exports = router;
