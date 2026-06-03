import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const PlanSchema = new mongoose.Schema(
  {
    name: String,
    exam: String,
    price: {
        mrp: Number,
        discount: Number,
        finalPrice: Number,
    },
    description: String,
    features_list: [String],
  },
  {
    timestamps: true,
  }
);

PlanSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

PlanSchema.index({ id: 1 });

export default mongoose.models.Plan ||
  mongoose.model("Plan", PlanSchema);