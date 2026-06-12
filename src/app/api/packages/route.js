import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Package from "@/models/Package";

export async function GET() {
  await connectDB();

  const data =
    await Package.find();

  return NextResponse.json(data);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const data =
    await Package.create(body);

  return NextResponse.json(data);
}