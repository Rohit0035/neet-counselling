import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Notice from "@/models/Notice";

export async function GET() {
  await connectDB();

  const notices = await Notice.find()
    .populate("category");

  return NextResponse.json(notices);
}