import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const BlogCategorySchema = new mongoose.Schema(
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

BlogCategorySchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

export default mongoose.models.BlogCategory ||
  mongoose.model("BlogCategory", BlogCategorySchema);