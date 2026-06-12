import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import University from "@/models/University";

export async function GET() {
  await connectDB();

  const data =
    await University.find();

  return NextResponse.json(data);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const data =
    await University.create(body);

  return NextResponse.json(data);
}