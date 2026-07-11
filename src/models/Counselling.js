// models/Institute.js

import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const CounsellingSchema = new mongoose.Schema(
  {
     exam: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    slug: {
      type: String,
      unique: true,
      index: true,
    },
    counsellingType: String,
    state: {
      type: String,
      index: true,
    },
    quotas:[{
      name: String,
      eligibility: String
    }],
    websiteGotoLink: String,    
    websitePropectusLink: String,
    websiteRegistrationLink: String,
    quickLinks:[String],
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

CounsellingSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

export default mongoose.models.Counselling ||
  mongoose.model("Counselling", CounsellingSchema);