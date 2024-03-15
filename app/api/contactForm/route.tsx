import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/app/contactSchema";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const data = Object.fromEntries(formData);

  const parsed = contactSchema.safeParse(data);

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
