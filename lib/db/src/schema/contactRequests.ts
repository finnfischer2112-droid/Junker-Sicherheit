import { pgTable, text, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { sql } from "drizzle-orm";

export const contactRequestsTable = pgTable("contact_requests", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject"),
  message: text("message").notNull(),
  consent: boolean("consent").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const insertContactRequestSchema = createInsertSchema(
  contactRequestsTable,
).omit({ id: true, createdAt: true });
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequestsTable.$inferSelect;
