import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const PackageSchema = new mongoose.Schema(
  {
    name: String,
    exam: String,
    tag: String,
    color: String,
    mrp: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    finalPrice: {
      type: Number,
      default: 0,
    },
    features: [String],
    note: String,
    status: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

PackageSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

PackageSchema.index({ id: 1 });

export default mongoose.models.Package ||
  mongoose.model("Package", PackageSchema);