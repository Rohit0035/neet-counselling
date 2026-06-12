import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Course from "@/models/Course";

// UPDATE
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const data = await Course.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!data) {
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

// SOFT DELETE
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const deletedData = await Course.delete({
      _id: id,
    });

    return NextResponse.json({
      success: true,
      data: deletedData,
      message: "Course deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}