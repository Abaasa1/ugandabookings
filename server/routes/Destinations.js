const express = require("express");
const router = express.Router();
const { Destinations } = require("../models");

router.get("/", async (req, res) => {
  const listOfDestinations = await Destinations.findAll();
  res.json(listOfDestinations);
});

router.post("/", async (req, res) => {
  const destination = req.body;
  await Destinations.create(destination);
  res.json(destination);
  //res.send("Hello World");
});

module.exports = router;
