import {
  sessionsTable,
  userRoleEnum,
  userRoles,
  usersTable,
} from "@/db/schema";
import z, { nullable } from "zod";
import crypto from "crypto";
import { db } from "@/db";
import { eq } from "drizzle-orm";

import { cookies } from "next/headers";

const SESSION_EXPIRATION_SECONDS = 60 * 60 * 24 * 7; // 7 days
const COOOKIE_SESSION_KEY = "session";

const sessionSchema = z.object({
  id: z.number(),
  role: z.enum(userRoles),
});

type UserSession = z.infer<typeof sessionSchema>;

export async function getUserFromSession() {
  const cookieStore = await cookies();
    const sessionId = cookieStore.get(COOOKIE_SESSION_KEY)?.value;
    

  if (!sessionId ) return null;
  return getUserSessionById(sessionId!);
}

export async function createUserSession(user: UserSession) {
  const sessionId = crypto.randomBytes(512).toString("hex").normalize();

  // pass the sessionId to drizzle or docker
  await db.insert(sessionsTable).values({
    id: sessionId,
    userId: user.id,
    expiresAt: new Date(Date.now() + SESSION_EXPIRATION_SECONDS * 1000),
  });

  // save to next js cookie
  const cookieStore = await cookies();
  cookieStore.set(COOOKIE_SESSION_KEY, sessionId, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    expires: new Date(Date.now() + SESSION_EXPIRATION_SECONDS * 1000),
  });
}

async function getUserSessionById(sessionId: string) {

    // Select the user from the database based on the session ID


  const result = await db
    .select()
    .from(sessionsTable)
    .where(eq(sessionsTable.id, sessionId))
    .innerJoin(usersTable, eq(sessionsTable.userId, usersTable.id));
  const session = result[0];
  if (!session) {
    return null;
  }
    
  if (session.sessions.expiresAt < new Date()) {
    await db.delete(sessionsTable).where(eq(sessionsTable.id, sessionId));
    return null;
  }
    // Return the full user data
    return session.users;
}
