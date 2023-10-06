require("dotenv").config(); // Load environment variables

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST, // May need to change this as MySQL server is hosted on a different machine
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
