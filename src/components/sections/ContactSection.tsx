"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactFormAction, type ContactFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AnimatedElement } from '@/components/animated-element';
import Image from 'next/image';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
    </Button>
  );
}

const ContactSection = () => {
  const initialState: ContactFormState = null;
  const [state, formAction] = useFormState(submitContactFormAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} action={formAction} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" type="text" placeholder="John Doe" required />
                    {state?.fields?.name && <p className="text-sm text-destructive">{state.fields.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                    {state?.fields?.email && <p className="text-sm text-destructive">{state.fields.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell us about your project..." rows={5} required />
                    {state?.fields?.message && <p className="text-sm text-destructive">{state.fields.message}</p>}
                  </div>
                  <SubmitButton />
                  {state?.message && <p className={`mt-4 text-sm ${state.success ? 'text-green-600' : 'text-destructive'}`}>{state.message}</p>}
                </form>
              </CardContent>
            </Card>
          </AnimatedElement>

          <AnimatedElement delay={200}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-headline text-2xl font-semibold">Our Office</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary flex-shrink-0" />123 Tech Avenue, Silicon Valley, CA 94000</p>
                  <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary flex-shrink-0" />+1 (123) 456-7890</p>
                  <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary flex-shrink-0" />hello@devridge.com</p>
                </div>
              </div>
              <Card className="overflow-hidden shadow-lg rounded-lg">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Office map"
                  data-ai-hint="office map city"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </Card>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
