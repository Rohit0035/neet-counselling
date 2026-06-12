import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Institute from "@/models/Institute";
import { uploadImage } from "@/lib/uploadImage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  await connectDB();

  const data = await Institute.find()
    .populate("university");

  return NextResponse.json(data);
}

export async function POST(req) {
  try {
    await connectDB();

    const session =
      await getServerSession(authOptions);

    const formData = await req.formData();

    // Complete institute object
    const payload = JSON.parse(
      formData.get("data")
    );

    // Files
    const logoFile =
      formData.get("logoImage");

    const coverFile =
      formData.get("coverImage");

    const galleryFiles =
      formData.getAll(
        "galleryImages"
      );

    // Upload files
    let logoImage = "";
    let coverImage = "";
    let galleryImages = [];

    if (
      logoFile &&
      typeof logoFile === "object"
    ) {
      logoImage = await uploadImage(
        logoFile,
        "uploads/institutes/logo"
      );
    }

    if (
      coverFile &&
      typeof coverFile === "object"
    ) {
      coverImage = await uploadImage(
        coverFile,
        "uploads/institutes/cover"
      );
    }

    if (galleryFiles.length) {
      galleryImages =
        await Promise.all(
          galleryFiles.map((file) =>
            uploadImage(
              file,
              "uploads/institutes/gallery"
            )
          )
        );
    }

    const institute =
      await Institute.create({
        ...payload,

        logoImage,
        coverImage,
        galleryImages,

        creator: session?.user?.id,
      });

    return NextResponse.json(
      institute,
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          error.message ||
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}