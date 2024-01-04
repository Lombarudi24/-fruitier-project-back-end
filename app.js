// DEPENDENCIES
const express = require("express");


// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
const fruitierController = require("./controllers/fruitierController")
app.use("/fruitier", fruitierController)

app.get("/", (req, res) => {
  res.send("Welcome to the Fruitier App!");
});

app.get("*", (req, res) => {
    res.status(404).send("This page can not be found!!!")
})

module.exports = app;
