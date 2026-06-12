import crypto from "crypto";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import connectDB from "@/lib/mongodb";
import StudentPackage from "@/models/StudentPackage";
import Package from "@/models/Package";

export async function POST(req) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);

    if (!session) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const {
      packageId,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    } = await req.json();

    const generatedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(
        `${razorpayOrderId}|${razorpayPaymentId}`
      )
      .digest("hex");

    if (
      generatedSignature !== razorpaySignature
    ) {
      return Response.json(
        {
          success: false,
          message: "Invalid payment",
        },
        { status: 400 }
      );
    }

    // Fetch package
    const packageData =
      await Package.findById(packageId);

    // Create purchase record
    const purchase =
      await StudentPackage.create({
        user: session.user.id,

        package: packageId,

        amount: packageData.finalPrice,

        razorpayOrderId,

        razorpayPaymentId,

        paymentStatus: "SUCCESS",
      });

    return Response.json({
      success: true,
      purchase,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}