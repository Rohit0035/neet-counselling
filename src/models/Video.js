// models/Institute.js

import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const VideoSchema = new mongoose.Schema(
  {
    counselling: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Counselling",
      required: true,
    },
    title: {
      type: String
    },

    description: {
      type: String
    },
    source: {
      type: String
    },
    language: {
      type: String
    },
    thumbnail: {
      type: String
    },
    video: {
      type: String
    },
    isPremium: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

VideoSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

export default mongoose.models.Video ||
  mongoose.model("Video", VideoSchema);