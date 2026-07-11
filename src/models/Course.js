// models/Course.js

import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const CourseSchema = new mongoose.Schema(
  {
     exam: {
      type: String,
      required: true,
    },
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
    courseType: String,
    degreeType: String,
    degreeTerm: String,
    fundingType: String,
    subExam: String,
    instructionMedium: String,
    duration: String,
    status: {
      type: Boolean,
      default: true,
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