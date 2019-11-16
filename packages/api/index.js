const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

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

app.listen(4000, () => {
	console.log(`Server listening on Port : ${4000}`);
});
