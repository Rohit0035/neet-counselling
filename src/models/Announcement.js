// models/Institute.js

import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const AnnouncementSchema = new mongoose.Schema(
  {
    counselling: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Counselling",
      required: true,
    },
    type: {
      type: String
    },
    title: {
      type: String
    },

    description: {
      type: String
    },
    documents:{
      name:{
        type: String
      },
      file: {
        type: String
      }
    },
    links: {
      name: {
        type: String
      },
      url: {
        type: String
      }
    }
  },
  {
    timestamps: true,
  }
);

AnnouncementSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

export default mongoose.models.Announcement ||
  mongoose.model("Announcement", AnnouncementSchema);