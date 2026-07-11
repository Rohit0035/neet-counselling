import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Counselling from "@/models/Counselling";

export async function GET() {
  await connectDB();

  const data =
    await Counselling.find();

  return NextResponse.json(data);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const data =
    await Counselling.create(body);

  return NextResponse.json(data);
}