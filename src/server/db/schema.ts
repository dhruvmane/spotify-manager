import { integer, uuid, pgTable, varchar, pgEnum, real } from "drizzle-orm/pg-core";
import { timestamp } from "drizzle-orm/singlestore-core";

export const billingIntervalEnum = pgEnum("billing_interval", [
  "MONTHLY",
  "QUATERLY",
  "YEARLY",
]);

export const billingRemark = pgEnum("billing_remark", [
  "ON-DATE",
  "PRE-PAID",
  "POST-PAID",
])

export const billingMonth = pgEnum("billing_month", [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER"
])

export const invoiceStatus = pgEnum("invoice_status", [
  "DUE",
  "PAID",
])

export const paymentMode = pgEnum("payment_mode", [
  "CASH",
  "UPI",
  "OTHER"
])

export const users = pgTable("users", {
  discordClientId: varchar().notNull(),
  status: invoiceStatus().default("DUE")
})

// BILLING HISTORY INVOICES
export const invoice = pgTable("invoices", {
  status: invoiceStatus("status").default("DUE"),
  paymentMode: paymentMode().default("UPI"),
  userId: varchar().references(() => users.discordClientId, { onUpdate: 'no action' }),
  invoiceId: uuid("id").primaryKey().defaultRandom(),
  invoiceRoll: integer("invoice_roll").notNull(),
  amount: real("amount").notNull().default(0),
  transactionDate: timestamp("transaction_date").defaultNow(),
  remark: billingRemark("remark").default("ON-DATE"),
  message: varchar(),
  monthFrom: billingMonth("month_from"),
  monthTo: billingMonth("month_from"),
  yearFrom: integer(),
  yearTo: integer(),
})

export const invoiceList = pgTable("invoiceList", {
  userId: varchar().references(() => users.discordClientId),
  invoiceId: uuid().references(() => invoice.invoiceId),
  invoiceRoll: uuid().references(() => invoice.invoiceRoll),
})
