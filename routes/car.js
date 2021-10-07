//importing modules
const express = require("express");
const router = express.Router();

//importing required controller modules
const carController = require("../controllers/car");

//Routes
router.get("/car/list", carController.carList);
router.post("/car/create", carController.carCreate);
router.put("/car/:id", carController.carUpdate);
router.delete("/car/:id", carController.carDelete);

module.exports = router;
