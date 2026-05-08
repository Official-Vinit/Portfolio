import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({ limit: "20kb" }));

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

app.post("/api/contact", async (req, res) => {
  const { name = "", email = "", subject = "", message = "" } = req.body;
  const trimmed = {
    name: toText(name).trim(),
    email: toText(email).trim(),
    subject: toText(subject).trim(),
    message: toText(message).trim(),
  };

  if (!trimmed.name || !trimmed.email || !trimmed.message) {
    return res.status(400).json({ message: "Name, email, and message are required." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  if (!hasMailConfig()) {
    return res.status(500).json({
      message: "Mail server is not configured yet. Add SMTP details to .env.",
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
});

const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Portfolio server running on http://localhost:${port}`);
});
