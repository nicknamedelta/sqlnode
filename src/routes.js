const express = require("express");
const UserController = require("./controllers/UserController");
const AdressController = require("./controllers/AddressController");

const routes = express.Router();

// list all users
routes.get("/users", UserController.index);
// create new user
routes.post("/users", UserController.store);

// list all user addreses
routes.get("user/:user_id/addresses", AdressController.index);
// create new address
routes.post("user/:user_id/addresses", AdressController.store);

module.exports = routes;
