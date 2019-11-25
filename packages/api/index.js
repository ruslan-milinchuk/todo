const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const route = require("./routes");

const getDbConnectionString = require("./config");
mongoose.connect(getDbConnectionString(), {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

route.tasks(app);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on Port : ${process.env.PORT}`);
});
