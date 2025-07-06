"use server";

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
  success: boolean;
} | null;

export async function submitContactFormAction(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const { name, email, message } = validatedFields.data;

    // Send email using our API route
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:9002"
      }/api/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return {
      message: "Your message has been sent successfully!",
      errors: null,
      success: true,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      message: "Failed to send message. Please try again.",
      errors: null,
      success: false,
    };
  }
}
