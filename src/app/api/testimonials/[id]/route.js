import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { uploadImage } from "@/lib/uploadImage";

export async function PUT(req, { params }) {
  try {
    await connectDB();

    // FIX HERE
    const { id } = await params;

    // SESSION
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const formData = await req.formData();

    const name =
      formData.get("name");
    const rating =
      formData.get("rating");

    const description =
      formData.get("description");

    const status =
      formData.get("status");

    const image =
      formData.get("image");

    let imagePath;
    // UPLOAD IMAGE
    if (image && image.name) {
      imagePath = await uploadImage(
        image,
        "uploads/testimonials"
      );
    }

    // UPDATE OBJECT
    const updateData = {
       name,
      description,
      status,
      image: imagePath,
      rating,
    };

    // only update image if uploaded
    if (imagePath) {
      updateData.image = imagePath;
    }

    const data = await Testimonial.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true, // better than returnDocument
        runValidators: true,
      }
    );

    // NOT FOUND
    if (!data) {
      return NextResponse.json(
        { message: "Testimonial not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const deletedTestimonial = await Testimonial.delete({ _id: id });

    return NextResponse.json({
      success: true,
      data: deletedTestimonial,
      message: "Testimonial deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}