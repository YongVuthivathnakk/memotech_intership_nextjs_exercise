import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: text().notNull(),
  lastName: text().notNull(),
  message: text().notNull(),
  email: text().notNull().unique(),
});
