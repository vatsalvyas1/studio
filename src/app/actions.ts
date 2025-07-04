"use server";

import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success?: boolean;
} | null;

export async function submitContactFormAction(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      success: false,
      fields: {
        name: parsed.error.flatten().fieldErrors.name?.[0] ?? "",
        email: parsed.error.flatten().fieldErrors.email?.[0] ?? "",
        message: parsed.error.flatten().fieldErrors.message?.[0] ?? "",
      },
      issues: parsed.error.flatten().formErrors,
    };
  }

  console.log("Form submitted successfully:", parsed.data);

  return { message: "Thank you for your message! We will get back to you shortly.", success: true };
}
