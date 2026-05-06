import { integer, pgEnum, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";


export const userRoles = ["admin", "user"] as const

export type UserRoles = (typeof userRoles)[number];
export const userRoleEnum = pgEnum("user_roles", userRoles);

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: text().notNull(),
    salt: text().notNull(),
    role: userRoleEnum().notNull().default("user"),
    createAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
    updateAt: timestamp({ withTimezone: true}).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const sessionsTable = pgTable("sessions", {
    id: text().primaryKey(),
    userId: integer().notNull().references(() => usersTable.id, {onDelete: "cascade"}),
    expiresAt: timestamp({ withTimezone: true }).notNull()
})
