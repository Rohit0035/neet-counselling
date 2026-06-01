import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import BlogComment from "@/models/BlogComment";

export async function GET( req, { params } ) {
    await connectDB();
    const { slug } = await params;
    const blog = await Blog.findOne({ slug });
    const relatedBlogs = await Blog.find({ category: blog.category, _id: { $ne: blog._id } })
        .populate("category");

    return NextResponse.json(relatedBlogs);
}