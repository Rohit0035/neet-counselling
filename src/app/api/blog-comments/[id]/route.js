import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import BlogComment from "@/models/BlogComment";

export async function PUT(req, { params }) {
  await connectDB();
  const { id } = await params;
  const body = await req.json();

  const data =
    await BlogComment.findByIdAndUpdate(
      id,
      body,
      { returnDocument: "after" }
    );

  return NextResponse.json(data);
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const deletedComment = await BlogComment.delete({
      _id: id,
    });

    return NextResponse.json({
      success: true,
      data: deletedComment,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}