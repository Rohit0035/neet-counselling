import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import BlogComment from "@/models/BlogComment";

export async function PUT(req, { params }) {
  await connectDB();

  const body = await req.json();

  const data =
    await BlogComment.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    );

  return NextResponse.json(data);
}