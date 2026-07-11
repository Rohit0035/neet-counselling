// models/Institute.js

import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const ChoiceListSchema = new mongoose.Schema(
  {
    counselling: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Counselling",
      required: true,
    },
    name: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

ChoiceListSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

export default mongoose.models.ChoiceList ||
  mongoose.model("ChoiceList", ChoiceListSchema);