"use client";

import { useActionState, useRef, useEffect, startTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { submitContactFormAction, type ContactFormState } from "@/app/actions";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof formSchema>;

const CtaSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const initialState: ContactFormState = {
    message: null,
    errors: null,
    success: false,
  };
  const [state, formAction, isPending] = useActionState(
    submitContactFormAction,
    initialState
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      form.reset();
    } else if (state?.message && state?.errors) {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description: state.message,
      });
    }
  }, [state, toast, form]);

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-10 w-24 h-24 bg-primary/5 rounded-full opacity-50 animate-blob animation-delay-2000 -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 -right-10 w-32 h-32 bg-accent/5 rounded-full opacity-50 animate-blob3 animation-delay-4000 -z-10"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold relative inline-block px-12 py-4">
            <Sparkles className="absolute top-0 left-0 h-8 w-8 text-accent opacity-70 -rotate-12" />
            <Sparkles className="absolute bottom-0 right-0 h-8 w-8 text-primary opacity-70 rotate-12" />
            Let us build the website that makes your brand{" "}
            <span className="italic text-accent">unforgettable</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind? Fill out the form below and we'll get back
            to you as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <motion.form
              ref={formRef}
              variants={formContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              onSubmit={(evt) => {
                evt.preventDefault();
                form.handleSubmit(() => {
                  startTransition(() => {
                    formAction(new FormData(formRef.current!));
                  });
                })(evt);
              }}
              className="space-y-6"
            >
              <motion.div variants={formItemVariants}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                variants={formItemVariants}
                className="text-center pt-4"
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={isPending}
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20"
                >
                  {isPending && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
