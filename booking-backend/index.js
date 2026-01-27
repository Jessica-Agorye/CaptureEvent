const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Booking = require("./models/Bookings");

const app = express();
const PORT = 4000;

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Booking API is running");
});

// Create booking
app.post("/api/bookings", async (req, res) => {
  try {
    console.log("Incoming booking data:", req.body);

    const booking = await Booking.create(req.body);

    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Booking error:", error.message);

    res.status(400).json({
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
