// models/Institute.js

import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const EventSchema = new mongoose.Schema(
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
    startTime: {
      type: Timestamp
    },
    endTime: {
      type: Timestamp
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

EventSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

export default mongoose.models.Event ||
  mongoose.model("Event", EventSchema);