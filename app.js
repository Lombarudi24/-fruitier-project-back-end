
const express = require("express");
const cors = require("cors");
const morgan = require('morgan')

const app = express();


// MIDDLEWARE
app.use(cors())
app.use(express.json());
app.use(morgan("tiny"))

// ROUTES
  

app.get("/", (req, res) => {
  res.send("Welcome to the Fruitiers App 341!");
});
const fruitiersController = require("./controllers/fruitsController");
app.use("/fruits", fruitiersController);

app.get("*", (req, res) => {
    res.status(404).send("This page can not be found!!!")
})

module.exports = app;
