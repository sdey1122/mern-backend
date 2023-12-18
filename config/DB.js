const mongoose = require("mongoose");
const ConfigureDB = async () => {
  try {
    // establish connection to database
    await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
    console.log("connected to the database");
  } catch (e) {
    console.log("ERROR!! Check your code", e);
  }
};

module.exports = ConfigureDB;
