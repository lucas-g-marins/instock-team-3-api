// express
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5050;

const warehouseRoutes = require("./routes/warehouses");

app.use("/warehouses", warehouseRoutes);

app.get("/", (req, res) => {
  res.send("It's the API");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
