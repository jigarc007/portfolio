"use server";
import nodemailer from "nodemailer";
export async function sendMail({ to, name, subject, body }) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
  } catch (error) {
    console.log({ error });
    return;
  }
  try {
    const sendResult = await transport.sendMail({
      from: to,
      to: SMTP_EMAIL,
      subject,
      html: body,
    });
    console.log({ sendResult });
  } catch (error) {
    console.log({ error });
  }
}
