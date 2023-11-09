import mongoose, { Schema } from "mongoose";

const ticketSchema = new Schema(
  {
    title: String,
    body: String,
    priority: String,
    user_email: String,
  },
  {
    timestamps: true,
  }
);

const Tickets =
  mongoose.models.Tickets || mongoose.model("Tickets", ticketSchema);

export default Tickets;
