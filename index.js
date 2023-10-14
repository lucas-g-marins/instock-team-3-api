const express = require("express");
const app = express();
// cors
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const knex = require("knex");
const newWarehouseRoutes = require("./routes/NewWareHouse"); // Import to newwarehouse file


app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5050;

const warehouseRoutes = require("./routes/warehouses");

// Use the NewWarehouse route
app.use("/api", newWarehouseRoutes);

app.use("/warehouses", warehouseRoutes);

app.get("/", (req, res) => {
  res.send("It's the API");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
