import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SOURCE_EMAIL,
      pass: process.env.SOURCE_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.SOURCE_EMAIL,
    to: process.env.DEST_EMAIL,
    subject: `Message from ${name} (${email}): ${subject}`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent!");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent!" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
