import Razorpay from "razorpay";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Package from "@/models/Package";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { packageId } = await req.json();

    // Fetch package from DB
    const packageData = await Package.findById(packageId);

    if (!packageData) {
      return Response.json(
        { message: "Package not found" },
        { status: 404 }
      );
    }

    const order = await razorpay.orders.create({
      amount: packageData.finalPrice * 100,
      currency: "INR",
      receipt: `pkg_${packageData._id}`,
    });

    return Response.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}