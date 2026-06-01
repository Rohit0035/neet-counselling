import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Notice from "@/models/Notice";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  await connectDB();

  const notices = await Notice.find()
    .populate("category");

  return NextResponse.json(notices);
}

export async function POST(req) {
  try {
    await connectDB();
    // GET SESSION
    const session =
      await getServerSession(authOptions);

    const body = await req.json();

    // CREATE SLUG
    const slug = body.title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    // CREATE BLOG
    const notice = await Notice.create({
      ...body,
      slug,
      creator: session.user.id,
    });

    return NextResponse.json(notice);

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}