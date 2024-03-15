// import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { recaptchaToken } = await req.json();

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();

  if (data.success) {
    return Response.json({ message: "recaptcha success" });
  } else {
    return Response.json({ message: "recaptcha failure" }, { status: 400 });
  }
}
