const { Pool } = require('pg');

require('dotenv').config({
    path: `${__dirname}/../.env`,
});

module.exports = new Pool();

