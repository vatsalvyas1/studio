// src/ai/flows/generate-design-variations.ts
'use server';
/**
 * @fileOverview An AI agent that generates creative design variations based on a given theme and branding guidelines.
 *
 * - generateDesignVariations - A function that generates design variations.
 * - GenerateDesignVariationsInput - The input type for the generateDesignVariations function.
 * - GenerateDesignVariationsOutput - The return type for the generateDesignVariations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDesignVariationsInputSchema = z.object({
  theme: z.string().describe('The overall theme for the website design.'),
  brandingGuidelines: z
    .string()
    .describe(
      'Detailed branding guidelines, including color palettes, typography, and visual style preferences.'
    ),
});
export type GenerateDesignVariationsInput = z.infer<
  typeof GenerateDesignVariationsInputSchema
>;

const GenerateDesignVariationsOutputSchema = z.object({
  heroSectionVariations: z
    .array(z.string())
    .describe('Creative variations for the hero section design.'),
  aboutUsSectionVariations: z
    .array(z.string())
    .describe('Creative variations for the about us section design.'),
  servicesShowcaseVariations: z
    .array(z.string())
    .describe('Creative variations for the services showcase design.'),
  portfolioVariations: z
    .array(z.string())
    .describe('Creative variations for the portfolio/case studies section design.'),
  contactSectionVariations: z
    .array(z.string())
    .describe('Creative variations for the contact section design.'),
});
export type GenerateDesignVariationsOutput = z.infer<
  typeof GenerateDesignVariationsOutputSchema
>;

export async function generateDesignVariations(
  input: GenerateDesignVariationsInput
): Promise<GenerateDesignVariationsOutput> {
  return generateDesignVariationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDesignVariationsPrompt',
  input: {schema: GenerateDesignVariationsInputSchema},
  output: {schema: GenerateDesignVariationsOutputSchema},
  prompt: `You are a creative web design expert. Based on the provided theme and branding guidelines, generate creative design variations for different website sections.

Theme: {{{theme}}}
Branding Guidelines: {{{brandingGuidelines}}}

Generate variations for the following sections:
- Hero Section
- About Us Section
- Services Showcase
- Portfolio/Case Studies
- Contact Section

Ensure the variations align with the theme and branding guidelines. Return the variations as an array of text descriptions for each section. Focus on generating innovative and visually appealing concepts.

Output in JSON format.`,
});

const generateDesignVariationsFlow = ai.defineFlow(
  {
    name: 'generateDesignVariationsFlow',
    inputSchema: GenerateDesignVariationsInputSchema,
    outputSchema: GenerateDesignVariationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
