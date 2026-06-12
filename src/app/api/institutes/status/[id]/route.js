import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Institute from "@/models/Institute";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    // CHECK SESSION
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // GET JSON DATA
    const body = await req.json();

    const data = await Institute.findByIdAndUpdate(
      id,
      {
        status: body.status,
      },
      {
        new: true,
      }
    );

    if (!data) {
      return NextResponse.json(
        { message: "Institute not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}