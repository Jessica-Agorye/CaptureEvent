const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    eventType: {
      type: String,
      required: true,
      enum: ["wedding", "birthday", "corporate", "conference", "other"],
    },

    eventDate: {
      type: Date,
      required: true,
    },

    guestCount: {
      type: Number,
      required: true,
      min: 1,
    },

    venue: {
      type: String,
      required: true,
      trim: true,
    },

    additionalNotes: {
      type: String,
      default: "",
    },

    plannerId: {
      type: Number, // matches the Eventplanners.id
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Booking", bookingSchema);
