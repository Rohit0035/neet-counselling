import mongoose from "mongoose"
import MongooseDelete from "mongoose-delete";

const UserSchema = new mongoose.Schema(
  {
    name: String,

    email: {
      type: String,
      unique: true,
    },

    password: String,

    image: String,

    role: {
      type: String,
      enum: ["admin", "student"],
      default: "student",
    },

    provider: {
      type: String,
      default: "credentials",
    },

    //RESET PASSWORD
    resetPasswordToken: {
      type: String,
    },

    resetPasswordExpire: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

UserSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

export default mongoose.models.User ||
  mongoose.model("User", UserSchema)