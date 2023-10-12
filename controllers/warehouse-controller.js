const knex = require("knex")(require("../knexfile"));

const index = (_req, res) => {
  knex("warehouses")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving warehouses: ${err}`)
    );
};

const singleWarehouse = (_req, res) => {
  knex
    .from("warehouses")
    .where({ id: 1 })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving individual warehouse: ${err}`)
    );
};

module.exports = {
  index,
  singleWarehouse,
};
