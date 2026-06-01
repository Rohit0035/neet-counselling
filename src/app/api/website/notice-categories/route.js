import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import NoticeCategory from "@/models/NoticeCategory";

export async function GET() {
  await connectDB();

  const categories =
    await NoticeCategory.find();

  return NextResponse.json(categories);
}