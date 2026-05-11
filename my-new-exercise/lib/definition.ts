import * as z from 'zod'
 
export const ContactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { error: 'Name must be at least 2 characters long.' })
        .trim(),
    lastName: z
    .string()
    .min(2, { error: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.email({ error: 'Please enter a valid email.' }).trim(),
  message: z
    .string()
    .min(8, { error: 'Be at least 8 characters long' }).trim(),
})
 
export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined