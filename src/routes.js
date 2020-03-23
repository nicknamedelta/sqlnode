const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({
    response: "Hello Dev!"
  });
});

// list all users
routes.get("/users", (req, res) => {
  UserController.index;
});

// create new user
routes.post("/users", (req, res) => {
  UserController.store;
});

module.exports = routes;
