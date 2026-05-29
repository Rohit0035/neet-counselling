import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import BlogCategory from "@/models/BlogCategory";

export async function GET() {
  await connectDB();

  const categories =
    await BlogCategory.find();

  return NextResponse.json(categories);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const category =
    await BlogCategory.create(body);

  return NextResponse.json(category);
}