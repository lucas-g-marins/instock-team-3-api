require("dotenv").config(); // Load environment variables

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost", // May need to change this as MySQL server is hosted on a different machine
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      database: process.env.DB_LOCAL_DBNAME,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
