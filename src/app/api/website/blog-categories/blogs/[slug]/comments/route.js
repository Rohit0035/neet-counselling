import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import BlogComment from "@/models/BlogComment";

export async function GET( req, { params } ) {
    await connectDB();
    const { slug } = await params;
    const blog = await Blog.findOne({ slug });
    const blogComments = await BlogComment.find({ blog: blog._id })
        .populate("blog");

    return NextResponse.json(blogComments);
}

export async function POST( req, { params } ) {
    await connectDB();
    const { slug } = await params;
    const blog = await Blog.findOne({ slug });

    const body = await req.json();

    const blogComment = await BlogComment.create({ ...body, blog: blog._id });

    return NextResponse.json(blogComment);
}