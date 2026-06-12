import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Course from "@/models/Course";

export async function GET() {
  await connectDB();

  const data =
    await Course.find();

  return NextResponse.json(data);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const data =
    await Course.create(body);

  return NextResponse.json(data);
}