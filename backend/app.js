require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//My Routes
const newsletter = require("./routes/newsletter");

const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED!!");
  });

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use("/", newsletter);

app.listen(process.env.PORT || 8000, () => console.log("Server connected!"));