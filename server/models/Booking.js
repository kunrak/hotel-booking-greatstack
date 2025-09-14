import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: String, ref: "user", required: true },
    room: { type: String, ref: "Room", required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    guests: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "canceled"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      required: true,
      default: "Pay at Hotel",
    },
    isPaid: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Add index for efficient queries
bookingSchema.index({ room: 1, checkInDate: 1, checkOutDate: 1 });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
