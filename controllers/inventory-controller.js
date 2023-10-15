const knex = require("knex")(require("../knexfile"));

const index = (_req, res) => {
  knex("inventories")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving inventory: ${err}`));
};

const inventoryItem = (req, res) => {
  knex
    .from("inventories")
    .where({ id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving individual inventoryItem: ${err}`)
    );
};

const editInventory = (req, res) => {
  console.log("body", req.body);
  knex
    .from("inventories")
    .where({ id: req.params.id })
    .update({ ...req.body })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error updating inventory item: ${err}`)
    );
};

module.exports = {
  index,
  inventoryItem,
  editInventory,
};
