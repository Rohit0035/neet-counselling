import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import BlogCategory from "@/models/BlogCategory";

export async function PUT(req, { params }) {
  await connectDB();
  const { id } = await params;
  const body = await req.json();

  const data =
    await BlogCategory.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

  return NextResponse.json(data);
}