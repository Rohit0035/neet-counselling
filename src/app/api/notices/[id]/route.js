import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Notice from "@/models/Notice";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

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

    const body = await req.json();

    // CREATE SLUG
    const slug = body.title
      ?.toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    // UPDATE OBJECT
    const updateData = {
      ...body,
      slug,
    };

    const data = await Notice.findByIdAndUpdate(
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
        { message: "Category not found" },
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

    const deletedNotice = await Notice.delete({ _id: id });

    return NextResponse.json({
      success: true,
      data: deletedNotice,
      message: "Notice deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}