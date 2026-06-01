import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import BlogCategory from "@/models/BlogCategory";

// UPDATE
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const data = await BlogCategory.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!data) {
      return NextResponse.json(
        { message: "Category not found" },
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

    const deletedCategory = await BlogCategory.delete({
      _id: id,
    });

    return NextResponse.json({
      success: true,
      data: deletedCategory,
      message: "Category deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}