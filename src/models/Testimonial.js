import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const TestimonialSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    rating: {
      type: Number,
      default: 0,},
    description: String,
  },
  {
    timestamps: true,
  }
);

TestimonialSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

TestimonialSchema.index({ id: 1 });

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);