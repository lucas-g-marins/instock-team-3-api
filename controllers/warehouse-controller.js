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

const singleWarehouse = (req, res) => {
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

const addWarehouse = (req, res) => {
  if (!req.body.email || req.body.email) {
    return res.status(400).send("Please fill out all fields");
  }

  knex("warehouses")
    .insert(req.body)
    .then((result) => {
      return knex("warehouses").where({ id: result[0] });
    })
    .then((createdWarehouse) => {
      res.status(201).json(createdWarehouse);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to create a new user" });
    });
};

module.exports = {
  index,
  singleWarehouse,
  addWarehouse,
};
