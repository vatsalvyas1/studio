import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/components/emails/contact-form-email';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['3amdevs.info@gmail.com'],
      subject: `New Message from ${name} via 3AM Devs Website`,
      reply_to: email,
      react: ContactFormEmail({ name, email, message }) as React.ReactElement,
    });

    if (error) {
      console.error('Error sending email with Resend:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
