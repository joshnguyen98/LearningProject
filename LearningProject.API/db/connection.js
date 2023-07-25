const { Pool } = require("pg");

const ENV = process.env.NODE_ENV;

require("dotenv").config({
  path: `${__dirname}/../.env.${ENV}`,
});

module.exports = new Pool();
