"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { generateDesignsAction, type AiToolFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AnimatedElement } from '@/components/animated-element';
import { Wand2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? 'Generating...' : <><Wand2 className="mr-2 h-4 w-4" /> Generate Ideas</>}
    </Button>
  );
}

const AiToolSection = () => {
  const initialState: AiToolFormState = null;
  const [state, formAction] = useFormState(generateDesignsAction, initialState);

  return (
    <section id="ai-tool" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">AI Design Assistant</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Unleash creativity with our AI-powered tool to generate unique design concepts for your website.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Generate Design Variations</CardTitle>
                <CardDescription>Describe your theme and branding to get started.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Textarea id="theme" name="theme" placeholder="e.g., 'Minimalist tech startup', 'Elegant floral boutique'" required />
                    {state?.fields?.theme && <p className="text-sm text-destructive">{state.fields.theme}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brandingGuidelines">Branding Guidelines</Label>
                    <Textarea id="brandingGuidelines" name="brandingGuidelines" placeholder="e.g., 'Colors: dark blue, white, gold accent. Fonts: Sans-serif. Style: Clean, professional.'" required />
                    {state?.fields?.brandingGuidelines && <p className="text-sm text-destructive">{state.fields.brandingGuidelines}</p>}
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </AnimatedElement>

          <AnimatedElement delay={200}>
            <Card className="h-full shadow-lg">
              <CardHeader>
                <CardTitle>Generated Ideas</CardTitle>
                <CardDescription>Your creative variations will appear here.</CardDescription>
              </CardHeader>
              <CardContent>
                {state?.data ? (
                  <Accordion type="single" collapsible className="w-full">
                    {Object.entries(state.data).map(([key, value]) => (
                      <AccordionItem value={key} key={key}>
                        <AccordionTrigger className="capitalize font-headline text-left">
                          {key.replace(/([A-Z])/g, ' $1').replace('Variations', '')}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            {(value as string[]).map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg bg-background/50">
                    <p className="text-muted-foreground">Waiting for input...</p>
                  </div>
                )}
                {state?.message && !state.data && (
                  <p className="mt-4 text-sm text-destructive">{state.message}</p>
                )}
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default AiToolSection;
