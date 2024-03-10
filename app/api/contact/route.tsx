import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/app/contactSchema";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parsed = contactSchema.safeParse(data);

  console.log("sup from the API");

  if (parsed.success) {
    return NextResponse.json({
      message: "Form submitted!",
      submission: parsed.data,
    });
  } else {
    return NextResponse.json(
      { message: "Form submission failed", errors: parsed.error.errors },
      { status: 400 }
    );
  }
}
