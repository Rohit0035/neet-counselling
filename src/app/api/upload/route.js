import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import { uploadImage } from "@/lib/uploadImage";

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    const image = formData.get("image");
    
    let imagePath;

    // UPLOAD IMAGE
    if (image && image.name) {
      imagePath = await uploadImage(
        image,
        "uploads/blogs"
      );
    }

    const data = { url: imagePath };

    return NextResponse.json(data);

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}