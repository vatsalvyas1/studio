import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Row,
  Column,
  Hr,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New message from your website contact form</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Contact Form Submission</Heading>
        <Text style={paragraph}>You've received a new message from your website's contact form.</Text>
        <Hr style={hr} />
        <Section>
          <Row>
            <Column style={label}>Name:</Column>
            <Column style={value}>{name}</Column>
          </Row>
          <Row>
            <Column style={label}>Email:</Column>
            <Column style={value}>{email}</Column>
          </Row>
        </Section>
        <Hr style={hr} />
        <Section>
          <Heading as="h2" style={messageHeading}>Message:</Heading>
          <Text style={messageText}>{message}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This email was sent from your contact form on 3AM Devs website.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  border: '1px solid #f0f0f0',
  borderRadius: '4px',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  color: '#2f2f2f',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center' as const,
  color: '#5f5f5f',
  padding: '0 40px',
};

const label = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#2f2f2f',
  width: '80px',
  paddingLeft: '40px',
};

const value = {
  fontSize: '16px',
  color: '#5f5f5f',
};

const messageHeading = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2f2f2f',
    padding: '0 40px',
};

const messageText = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#5f5f5f',
  padding: '0 40px',
};

const hr = {
  borderColor: '#f0f0f0',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 40px',
};
