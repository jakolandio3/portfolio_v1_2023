import { NextRequest } from "next/server";

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!(data satisfies SubmissionPayload)) {
      return Response.json({ error: "Invalid data" }, { status: 400 });
    }

    await sgMail.send({
      to: "jakobdouglas.dev@gmail.com",
      from: "jakobdouglas.dev@gmail.com",
      subject: `[Contact Form]`,
      html: `<div><h1>You've got a mail<h1/><p>Email from ${data.fullname} at ${data.email}</p><p>${data.message}</p></div>`,
    });

    return Response.json({ sent: true });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "" });
  }
}

interface SubmissionPayload {
  email: string;
  fullname: string;
  subject: string;
  message: string;
}
