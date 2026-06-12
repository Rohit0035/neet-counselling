import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Institute from "@/models/Institute";
import University from "@/models/University";
import Course from "@/models/Course";

export async function GET() {
  await connectDB();

  const data = await Institute.find()
    .populate("university").populate("courses");

  return NextResponse.json(data);
}