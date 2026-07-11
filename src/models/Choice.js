// models/Institute.js

import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const ChoiceSchema = new mongoose.Schema(
  {
    choiceList: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChoiceList",
      required: true,
    },
    institute: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institute",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    quota: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quota",
      required: true,
    },
    category:String,
    choiceNumber: Number
  },
  {
    timestamps: true,
  }
);

ChoiceSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

export default mongoose.models.Choice ||
  mongoose.model("Choice", ChoiceSchema);