const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouse-controller");

router.route("/").get(warehouseController.index);

router.route("/id").get(warehouseController.singleWarehouse);

router.route("/").post(warehouseController.addWarehouse);

module.exports = router;
