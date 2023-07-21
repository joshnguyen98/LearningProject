const express = require('express');
const { getUsers } = require('./controllers/controllers.users');

const app = express();

app.use(express.json());

app.get("/api/users", getUsers);

module.exports = app;





