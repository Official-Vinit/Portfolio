import nodemailer from "nodemailer";

const requiredMailConfig = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_TO_EMAIL",
];

const hasMailConfig = () =>
  requiredMailConfig.every((key) => Boolean(process.env[key]));

const createTransporter = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS.replace(/\s/g, ""),
    },
  });

const toText = (value) => (typeof value === "string" ? value : "");

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const parseBody = async (req) => {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string") {
    return JSON.parse(req.body);
  }

  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  return rawBody ? JSON.parse(rawBody) : {};
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed." });
  }

  let body;

  try {
    body = await parseBody(req);
  } catch {
    return res.status(400).json({ message: "Invalid request body." });
  }

  const { name = "", email = "", subject = "", message = "" } = body;
  const trimmed = {
    name: toText(name).trim(),
    email: toText(email).trim(),
    subject: toText(subject).trim(),
    message: toText(message).trim(),
  };

  if (!trimmed.name || !trimmed.email || !trimmed.message) {
    return res
      .status(400)
      .json({ message: "Name, email, and message are required." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  if (!hasMailConfig()) {
    return res.status(500).json({
      message: "Mail server is not configured yet. Add SMTP details to deployment environment variables.",
    });
  }

  try {
    const transporter = createTransporter();
    const safe = {
      name: escapeHtml(trimmed.name),
      email: escapeHtml(trimmed.email),
      subject: escapeHtml(trimmed.subject || "Portfolio contact"),
      message: escapeHtml(trimmed.message),
    };

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: trimmed.email,
      subject: (trimmed.subject || `Portfolio message from ${trimmed.name}`).replace(/[\r\n]/g, " "),
      text: [
        `Name: ${trimmed.name}`,
        `Email: ${trimmed.email}`,
        `Subject: ${trimmed.subject || "Portfolio contact"}`,
        "",
        trimmed.message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${safe.name}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Subject:</strong> ${safe.subject}</p>
          <p style="white-space: pre-line;">${safe.message}</p>
        </div>
      `,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact email failed:", error);
    return res.status(500).json({ message: "Unable to send message right now." });
  }
}
