import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import StudentPackage from "@/models/StudentPackage";
import Package from "@/models/Package";

export async function GET() {
  await connectDB();

  const data =
    await StudentPackage.find().populate("package").populate("user");

  return NextResponse.json(data);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const data =
    await StudentPackage.create(body);

  return NextResponse.json(data);
}