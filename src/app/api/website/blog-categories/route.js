import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import BlogCategory from "@/models/BlogCategory";

export async function GET() {
  await connectDB();

  const categories =
    await BlogCategory.find();

  return NextResponse.json(categories);
}