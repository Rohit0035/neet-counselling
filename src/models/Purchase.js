import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const PurchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Package",
  },

  amount: Number,

  razorpayOrderId: String,

  razorpayPaymentId: String,

  paymentStatus: {
    type: String,
    enum: [
      "PENDING",
      "SUCCESS",
      "FAILED",
    ],
    default: "SUCCESS",
  },

  purchasedAt: {
    type: Date,
    default: Date.now,
  },
});

PurchaseSchema.plugin(MongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.models.Purchase ||
  mongoose.model("Purchase", PurchaseSchema);