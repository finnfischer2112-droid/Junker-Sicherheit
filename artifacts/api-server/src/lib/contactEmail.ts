import nodemailer from "nodemailer";
import { logger } from "./logger";

type ContactEmailData = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function optionalValue(value?: string) {
  return value?.trim() ? escapeHtml(value.trim()) : "Nicht angegeben";
}

export async function sendContactEmail(data: ContactEmailData) {
  const host = process.env["SMTP_HOST"];
  const port = Number(process.env["SMTP_PORT"] ?? "465");
  const secure = process.env["SMTP_SECURE"] !== "false";
  const user = process.env["SMTP_USER"];
  const password = process.env["SMTP_PASSWORD"];
  const recipient = process.env["CONTACT_EMAIL"];
  const sender = process.env["CONTACT_FROM_EMAIL"] ?? user;

  if (
    !host ||
    !Number.isInteger(port) ||
    !user ||
    !password ||
    !recipient ||
    !sender
  ) {
    logger.warn(
      {
        hasSmtpHost: Boolean(host),
        hasValidSmtpPort: Number.isInteger(port),
        hasSmtpUser: Boolean(user),
        hasSmtpPassword: Boolean(password),
        hasContactEmail: Boolean(recipient),
        hasContactFromEmail: Boolean(sender),
      },
      "Contact email not sent because email configuration is incomplete",
    );
    throw new Error("Contact email configuration is incomplete");
  }

  const subject = data.subject?.trim()
    ? `Neue Kontaktanfrage: ${data.subject.trim()}`
    : "Neue Kontaktanfrage über junker-sicherheit.de";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 8000,
    dnsTimeout: 8000,
    auth: {
      user,
      pass: password,
    },
  });

  await transporter.sendMail({
    from: sender,
    to: recipient,
    replyTo: data.email,
    subject,
    html: `
      <h1>Neue Kontaktanfrage</h1>
      <p><strong>Name/Firma:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Telefon:</strong> ${optionalValue(data.phone)}</p>
      <p><strong>Betreff:</strong> ${optionalValue(data.subject)}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${escapeHtml(data.message).replaceAll("\n", "<br>")}</p>
    `,
    text: [
      "Neue Kontaktanfrage",
      "",
      `Name/Firma: ${data.name}`,
      `E-Mail: ${data.email}`,
      `Telefon: ${data.phone?.trim() || "Nicht angegeben"}`,
      `Betreff: ${data.subject?.trim() || "Nicht angegeben"}`,
      "",
      "Nachricht:",
      data.message,
    ].join("\n"),
  });
}
