const knex = require("knex")(require("../knexfile"));

const index = (_req, res) => {
  knex("inventories")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving inventory: ${err}`));
};

const inventoryItem = (_req, res) => {
  knex
    .from("inventories")
    .where({ id: 1 })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving individual inventoryItem: ${err}`)
    );
};

module.exports = {
  index,
  inventoryItem,
};
