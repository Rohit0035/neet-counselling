import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Package from "@/models/Package";

// UPDATE
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const data = await Package.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!data) {
      return NextResponse.json(
        { message: "Package not found" },
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

    const deletedData = await Package.delete({
      _id: id,
    });

    return NextResponse.json({
      success: true,
      data: deletedData,
      message: "Package deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}