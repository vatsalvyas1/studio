"use server";

import { generateDesignVariations, type GenerateDesignVariationsInput } from '@/ai/flows/generate-design-variations';
import { z } from 'zod';

const AiToolFormSchema = z.object({
  theme: z.string().min(10, { message: "Theme must be at least 10 characters." }),
  brandingGuidelines: z.string().min(10, { message: "Branding guidelines must be at least 10 characters." }),
});

export type AiToolFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: any;
} | null;

export async function generateDesignsAction(
  prevState: AiToolFormState,
  data: FormData
): Promise<AiToolFormState> {
  const formData = Object.fromEntries(data);
  const parsed = AiToolFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data",
      fields: {
        theme: parsed.error.flatten().fieldErrors.theme?.[0] ?? "",
        brandingGuidelines: parsed.error.flatten().fieldErrors.brandingGuidelines?.[0] ?? "",
      },
      issues: parsed.error.flatten().formErrors,
    };
  }

  try {
    const aiInput: GenerateDesignVariationsInput = {
      theme: parsed.data.theme,
      brandingGuidelines: parsed.data.brandingGuidelines,
    };
    const result = await generateDesignVariations(aiInput);
    return { message: "Successfully generated variations!", data: result };
  } catch (e) {
    const error = e as Error;
    return { message: `Failed to generate variations: ${error.message}` };
  }
}

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
