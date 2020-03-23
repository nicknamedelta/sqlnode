const express = require("express");
const UserController = require("./controllers/UserController");
const AdressController = require("./controllers/AddressController");
const TechController = require("./controllers/TechController");
const ReportController = require("./controllers/ReportController");

const routes = express.Router();

// list all users
routes.get("/users", UserController.index);
// create new user
routes.post("/users", UserController.store);

// list all user addreses
routes.get("user/:user_id/addresses", AdressController.index);
// create new address
routes.post("user/:user_id/addresses", AdressController.store);

// list all user techs
routes.get("user/:user_id/techs", TechController.index);
// create new tech
routes.post("user/:user_id/techs", TechController.store);
// delete one user_tech
routes.delete("user/:user_id/techs", TechController.delete);

// show reports
routes.get("/report", ReportController.show);

module.exports = routes;
