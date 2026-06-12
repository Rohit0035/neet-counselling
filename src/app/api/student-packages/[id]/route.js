import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import StudentPackage from "@/models/StudentPackage";

// UPDATE
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const data = await StudentPackage.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!data) {
      return NextResponse.json(
        { message: "Student Package not found" },
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

    const deletedData = await StudentPackage.delete({
      _id: id,
    });

    return NextResponse.json({
      success: true,
      data: deletedData,
      message: "Student Package deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}