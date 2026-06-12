import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const StudentPackageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  package: {
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
  status: {
      type: Boolean,
      default: true,
    }
}, {
  timestamps: true,
});

StudentPackageSchema.plugin(MongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.models.StudentPackage ||
  mongoose.model("StudentPackage", StudentPackageSchema);