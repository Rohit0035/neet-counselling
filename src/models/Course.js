// models/Course.js

import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const CourseSchema = new mongoose.Schema(
  {
    zynerdId: Number,

    name: {
      type: String,
      required: true,
      trim: true,
    },

    shortName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

CourseSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

export default mongoose.models.Course ||
  mongoose.model("Course", CourseSchema);