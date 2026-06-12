// models/University.js

import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const UniversitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    type: String,
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

UniversitySchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

export default mongoose.models.University ||
  mongoose.model("University", UniversitySchema);