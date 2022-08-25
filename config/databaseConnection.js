const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const connectiondb = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `MongoDB Connection successfully: ${connectiondb.connection.host}`.bgGreen.black
    );
  } catch (error) {
    console.log(`error: ${error.message}`.bgRed.white);
  }
};
module.exports = connectDB;
