import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("sup from the API");
  if (body) {
    const { name, email, message } = body;
    console.log(name, email, message);
  }
  return NextResponse.json({ message: "Form submitted!" });
}
