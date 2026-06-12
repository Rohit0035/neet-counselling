import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";
import { uploadImage } from "@/lib/uploadImage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  await connectDB();

  const testimonials = await Testimonial.find();

  return NextResponse.json(testimonials);
}

export async function POST(req) {
  try {
    await connectDB();
    // GET SESSION
    const session =
      await getServerSession(authOptions);

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

    // UPLOAD IMAGE
    const imagePath =
      await uploadImage(
        image,
        "uploads/testimonials"
      );

    // CREATE Testimonial
    const testimonial = await Testimonial.create({
      name,
      description,
      status,
      image: imagePath,
      rating,
    });

    return NextResponse.json(testimonial);

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}