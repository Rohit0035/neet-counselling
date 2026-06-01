import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const NoticeCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
      default: "",
    },
    
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

NoticeCategorySchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

export default mongoose.models.NoticeCategory ||
  mongoose.model("NoticeCategory", NoticeCategorySchema);