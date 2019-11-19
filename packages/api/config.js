const dotenv = require("dotenv");
dotenv.config();

const getDbConnectionString = () => process.env.MONGO_LINK;
module.exports = getDbConnectionString;
