import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import NoticeCategory from "@/models/NoticeCategory";

export async function GET() {
  await connectDB();

  const notices =
    await NoticeCategory.find();

  return NextResponse.json(notices);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const category =
    await NoticeCategory.create(body);

  return NextResponse.json(category);
}