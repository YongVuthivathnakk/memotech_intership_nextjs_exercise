"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { ContactFormSchema, FormState } from "@/lib/definition";

export async function submitContact(state: FormState, formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;
  try {
    const [user] = await db
      .insert(usersTable)
      .values({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        message: data.message,
      })
      .returning({ id: usersTable.id });
    if (user === null) {
      return { message: "Unable to send an message" };
    }
  } catch (e) {
    return { message: "Unable to send an message" };
  }
}
