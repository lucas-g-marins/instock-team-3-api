const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouse-controller");

router.route("/").get(warehouseController.index);
//First ID avises that we are looking to use single warehouse parameter
router.route("/:id").get(warehouseController.singleWarehouse);
router.route("/:id").put(warehouseController.editWarehouse);

router.route("/").post(warehouseController.addWarehouse);

module.exports = router;
