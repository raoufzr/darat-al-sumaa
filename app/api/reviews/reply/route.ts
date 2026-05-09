
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    return NextResponse.json({
      success: true,
      reply: "شكراً لك على تقييمك الرائع 🙏",
      review: body,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate reply" },
      { status: 500 }
    );
  }
}
