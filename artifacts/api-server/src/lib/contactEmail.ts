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
  const apiKey = process.env["RESEND_API_KEY"];
  const recipient = process.env["CONTACT_EMAIL"];
  const sender =
    process.env["CONTACT_FROM_EMAIL"] ??
    "Junker-Sicherheit <onboarding@resend.dev>";

  if (!apiKey || !recipient) {
    logger.warn(
      {
        hasResendApiKey: Boolean(apiKey),
        hasContactEmail: Boolean(recipient),
      },
      "Contact email not sent because email configuration is incomplete",
    );
    return;
  }

  const subject = data.subject?.trim()
    ? `Neue Kontaktanfrage: ${data.subject.trim()}`
    : "Neue Kontaktanfrage über junker-sicherheit.de";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: data.email,
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
    }),
  });

  if (!response.ok) {
    const responseBody = await response.text();
    throw new Error(
      `Resend rejected contact email with status ${response.status}: ${responseBody.slice(0, 500)}`,
    );
  }
}
