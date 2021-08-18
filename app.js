require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//My Routes
const newsletter = require("./routes/newsletter");

const app = express();
app.use(cors());

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

//Routes
app.use("/", newsletter);

app.get("/", (req, res) =>{
  res.send("Working");
} )

app.listen(process.env.PORT || 8000, () => console.log("Server connected!"));