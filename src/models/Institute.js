// models/Institute.js

import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const InstituteSchema = new mongoose.Schema(
  {
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

    state: {
      type: String,
      index: true,
    },

    instituteType: String,
    instituteManagement: String,
    
    university: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "University",
    },
    
    website: String,
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],

    logoUrl: String,
    coverUrl: String,

    imageUrls: [String],


    fee: {
      min: {type: Number, default: 0},
      max: {type: Number, default: 0},
    },

    seats: {
        type: Number,
        default: 0,
      },

    beds: {
        type: Number,
        default: 0,
      },

    establishedYear: {
      type: Number,
      default: 0,
    },

    languages: [String],

    about: String,

    location: {
      city: String,
      district: String,
      pincode: String,
      address: String,

      latitude: Number,
      longitude: Number,

      googleMapsUrl: String,
    },

    airport: {
      name: String,
      distance: {
        type: Number,
        default: 0,
      },
      link: String,
    },

    contactPerson: {
      name: String,
      designation: String,
      emails: [String],
      phoneNos: [String],
    },

    dean: {
      name: String,
      designation: String,
      emails: [String],
      phoneNos: [String],
    },

    nodalOfficer: {
      name: String,
      designation: String,
      emails: [String],
      phoneNos: [String],
    },

    hostel: {
      mensHostelAvailability: Boolean,
      womensHostelAvailability: Boolean,
      details: String,
      feeDetails: String,
      mess:{
        veg: Boolean,
        nonVeg: Boolean,
        details: String,
      },
    },

    nmc: [
        {
          label: String,
          url: String,
        },
      ],

    social: {
      twitter: String,
      facebook: String,
      instagram: String,
      linkedin: String,
      youtube: String,

      youtubeChannels: [
        {
          label: String,
          url: String,
        },
      ],
    },

    mbbsExamResult: {
      availability: Boolean,

      links: [
        {
          label: String,
          url: String,
        },
      ],
    },

    infoLinks: [
      {
        label: String,
        url: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

InstituteSchema.plugin(MongooseDelete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: "all",
});

InstituteSchema.index({ name: "text" });
InstituteSchema.index({ state: 1 });
InstituteSchema.index({ instituteType: 1 });
InstituteSchema.index({ "fee.min": 1 });
InstituteSchema.index({ "seats.count": -1 });

export default mongoose.models.Institute ||
  mongoose.model("Institute", InstituteSchema);