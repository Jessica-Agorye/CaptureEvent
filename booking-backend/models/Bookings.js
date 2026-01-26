const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },

    eventType: {
      type: String,
      required: [true, "Event type is required"],
      enum: ["wedding", "birthday", "corporate", "conference", "other"],
    },

    eventDate: {
      type: Date,
      required: [true, "Event date is required"],
    },

    guestCount: {
      type: Number,
      required: [true, "Guest count is required"],
      min: [1, "At least 1 guest is required"],
    },

    venue: {
      type: String,
      required: [true, "Venue is required"],
      trim: true,
    },

    additionalNotes: {
      type: String,
      default: "",
    },

    plannerId: {
      type: Number,
      required: [true, "Planner ID is required"],
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Booking", bookingSchema);
