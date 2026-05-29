import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import BlogComment from "@/models/BlogComment";

export async function GET() {
  await connectDB();

  const comments =
    await BlogComment.find()
      .populate("blog");

  return NextResponse.json(comments);
}