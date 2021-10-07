//importing modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

//requiring routes
const carRoute = require("./routes/car");

const app = express();
dotenv.config();

//middlewares
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use("/", carRoute);

//connecting database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected successful"))
  .catch((err) => {
    console.log(err);
  });

//Server
app.listen(process.env.PORT || 8080, () => {
  console.log`App is listening at ${process.env.PORT || 8080}`;
});
