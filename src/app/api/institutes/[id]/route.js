import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Institute from "@/models/Institute";
import { uploadImage } from "@/lib/uploadImage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const session =
      await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const formData = await req.formData();

    const payload = JSON.parse(
      formData.get("data")
    );

    const logoFile =
      formData.get("logoImage");

    const coverFile =
      formData.get("coverImage");

    const galleryFiles =
      formData.getAll("galleryImages");

    const institute =
      await Institute.findById(id);

    if (!institute) {
      return NextResponse.json(
        { message: "Institute not found" },
        { status: 404 }
      );
    }

    let logoImage =
      institute.logoImage;

    let coverImage =
      institute.coverImage;

    let galleryImages =
      institute.galleryImages || [];

    // Upload new logo
    if (
      logoFile &&
      typeof logoFile === "object" &&
      logoFile.name
    ) {
      logoImage = await uploadImage(
        logoFile,
        "uploads/institutes/logo"
      );
    }

    // Upload new cover
    if (
      coverFile &&
      typeof coverFile === "object" &&
      coverFile.name
    ) {
      coverImage = await uploadImage(
        coverFile,
        "uploads/institutes/cover"
      );
    }

    // Replace gallery if new files uploaded
    if (
      galleryFiles.length &&
      galleryFiles[0]?.name
    ) {
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

    const updatedInstitute =
      await Institute.findByIdAndUpdate(
        id,
        {
          ...payload,
          logoImage,
          coverImage,
          galleryImages,
        },
        {
          new: true,
          runValidators: true,
        }
      );

    return NextResponse.json(
      updatedInstitute
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

export async function DELETE(
  req,
  { params }
) {
  try {
    await connectDB();

    const { id } = await params;

    const session =
      await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const institute =
      await Institute.findByIdAndDelete(
        id
      );

    if (!institute) {
      return NextResponse.json(
        {
          message:
            "Institute not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Institute deleted successfully",
      data: institute,
    });
  } catch (error) {
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