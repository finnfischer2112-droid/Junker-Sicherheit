import { Router, type IRouter } from "express";

import { db, contactRequestsTable } from "@workspace/db";
import {
  CreateContactRequestBody,
  CreateContactRequestResponse,
} from "@workspace/api-zod";
import { sendContactEmail } from "../lib/contactEmail";
import { logger } from "../lib/logger";

const router: IRouter = Router();

function serialize(row: typeof contactRequestsTable.$inferSelect) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone ?? undefined,
    subject: row.subject ?? undefined,
    message: row.message,
    consent: row.consent,
    createdAt: row.createdAt.toISOString(),
  };
}

router.post("/contact-requests", async (req, res) => {
  const parsed = CreateContactRequestBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: "Ungültige Eingabe" });
    return;
  }
  if (!parsed.data.consent) {
    res.status(400).json({
      message: "Die Einwilligung zur Datenverarbeitung ist erforderlich",
    });
    return;
  }
  const [row] = await db
    .insert(contactRequestsTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      subject: parsed.data.subject,
      message: parsed.data.message,
      consent: parsed.data.consent,
    })
    .returning();

  try {
    await sendContactEmail({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      subject: parsed.data.subject,
      message: parsed.data.message,
    });
  } catch (error) {
    logger.error(
      { err: error, contactRequestId: row.id },
      "Contact request was stored but email notification failed",
    );
  }

  res.status(201).json(CreateContactRequestResponse.parse(serialize(row)));
});

export default router;
