const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Booking API is running");
});

app.post("/api/bookings", (req, res) => {
  console.log("Received booking:", req.body);

  res.status(201).json({
    message: "Booking received successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
