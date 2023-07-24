const express = require("express");
const { getUsers } = require("./controllers/controllers.users");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/users", getUsers);

module.exports = app;
