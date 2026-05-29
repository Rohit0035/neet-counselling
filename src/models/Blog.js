import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const BlogSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogCategory",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: true,
    },

    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    views: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
    status: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

BlogSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);