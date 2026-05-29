import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { uploadImage } from "@/lib/uploadImage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  await connectDB();

  const blogs = await Blog.find()
    .populate("category");

  return NextResponse.json(blogs);
}

export async function POST(req) {
  try {
    await connectDB();
    // GET SESSION
    const session =
      await getServerSession(authOptions);

    const formData = await req.formData();

    const category =
      formData.get("category");

    const title =
      formData.get("title");

    const description =
      formData.get("description");

    const status =
      formData.get("status");

    const image =
      formData.get("image");

    // UPLOAD IMAGE
    const imagePath =
      await uploadImage(
        image,
        "uploads/blogs"
      );

    // CREATE SLUG
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-");

    // CREATE BLOG
    const blog = await Blog.create({
      category,
      title,
      description,
      status,
      slug,
      image: imagePath,
      creator: session.user.id,
    });

    return NextResponse.json(blog);

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