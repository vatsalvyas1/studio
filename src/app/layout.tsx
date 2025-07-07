import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "3AM Devs",
    template: "%s | 3AM Devs",
  },
  description:
    "We build beautiful, high-performance websites and applications for businesses of all sizes.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%237a42f4'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='M12%202v8'/%3E%3Cpath%20d='m4.93%2010.93%201.41%201.41'/%3E%3Cpath%20d='M2%2018h2'/%3E%3Cpath%20d='M20%2018h2'/%3E%3Cpath%20d='m17.66%2010.93%201.41-1.41'/%3E%3Cpath%20d='M18%2022H6'/%3E%3Cpath%20d='M16%2018a4%204%200%200%200-8%200'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="3AM Devs" />
        <meta
          name="keywords"
          content="3AM Devs, web development, software agency, websites, applications, design, development, digital agency"
        />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="3AM Devs - Beautiful, High-Performance Websites & Apps"
        />
        <meta
          property="og:description"
          content="We build beautiful, high-performance websites and applications for businesses of all sizes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://3amdevs.com/" />
        <meta property="og:image" content="/favicon.ico" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="3AM Devs - Beautiful, High-Performance Websites & Apps"
        />
        <meta
          name="twitter:description"
          content="We build beautiful, high-performance websites and applications for businesses of all sizes."
        />
        <meta name="twitter:image" content="/favicon.ico" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "3AM Devs",
              url: "https://3amdevs.com/",
              logo: "/favicon.ico",
              description:
                "We build beautiful, high-performance websites and applications for businesses of all sizes.",
              sameAs: [
                "https://www.linkedin.com/company/3amdevs",
                "https://twitter.com/3amdevs",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "info@3amdevs.com",
                  contactType: "customer support",
                  url: "https://www.3amdevs.com/#contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
