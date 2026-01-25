const mongose = require("mongoose");
const connectDB = async () => {
  try {
    await mongose.connect("mongodb://localhost:27017/bookingDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
