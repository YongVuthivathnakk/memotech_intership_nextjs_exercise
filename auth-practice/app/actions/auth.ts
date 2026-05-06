"use server";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import {
  FormState,
  SigninFormSchema,
  SignupFormSchema,
} from "@/lib/definitions";
import { eq } from "drizzle-orm";   
import { redirect } from "next/navigation";
import { generateSalt, hashPassword } from "../../core/auth/passwordHasher";
import { createUserSession } from "@/core/auth/session";

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data;

  const existingUser = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (existingUser.length > 0)
    return { message: "Account already exist for this email." };

  try {
    const data = validatedFields.data;
    const salt = generateSalt();
    const hashedPassword = await hashPassword(data.password, salt);

    const [user] = await db
      .insert(usersTable)
      .values({
        name: data.name,
        email: data.email,
        password: hashedPassword,
        salt: salt,
      })
      .returning({ id: usersTable.id, role: usersTable.role });


    console.log("user created:", user); // 👈 add this

    if (user === null) {
      return { message: "Unable to create an account" };
    }

    await createUserSession(user);
    console.log("session created!");
    
} catch (error) {
    console.error(error);
    return {
        
        message: "Unable to create an account",
    };
}
redirect("/");

}

export async function signin(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...
}
