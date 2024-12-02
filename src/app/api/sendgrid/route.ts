const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res) {
  try {
    const data = await req.json();

    await sgMail.send({
      to: "jakobdouglas.dev@gmail.com", // Your email where you'll receive emails
      from: "jakobdouglas.dev@gmail.com", // your website email address here
      subject: `[Contact Form]`,
      html: `<div><h1>You've got a mail<h1/><p>Email from ${data.fullname} at ${data.email}</p><p>${data.message}</p></div>`,
    });

    return Response.json({ sent: true });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "" });
  }
}
