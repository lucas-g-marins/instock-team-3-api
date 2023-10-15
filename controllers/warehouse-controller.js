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
    .where({ id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving individual warehouse: ${err}`)
    );
};

const deleteWarehouse = (req, res) => {
  const warehouseId = req.params.id;
  // Delete associated inventory items
  knex("inventories")
    .where({ warehouse_id: warehouseId })
    .del()
    .then(() => knex("warehouses").where({ id: warehouseId }).del()) // Delete the warehouse
    .then((result) => {
      if (result === 0) {
        res.status(404).json(`Warehouse not found: ${err}`);
      } else {
        res.status(204).end();
      }
    })
    .catch((err) => res.status(500).json(`Error deleting warehouse: ${err}`));
};

const editWarehouse = (req, res) => {
  console.log("body", req.body);
  knex("warehouses")
    .where({ id: req.params.id })
    .update({ ...req.body })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: `Unable to edit warehouse infromation: ${err}` });
    });
};

const addWarehouse = (req, res) => {
  if (!req.body.contact_email || !req.body.contact_phone) {
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
  editWarehouse,
  addWarehouse,
  deleteWarehouse,
};
