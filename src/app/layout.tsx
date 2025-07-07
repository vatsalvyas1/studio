import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://3amdevs.com"),
  title: {
    template: "%s | 3AM Devs - Web Development & Digital Marketing Agency",
    default: "3AM Devs - Premier Web Development & Digital Marketing Agency",
  },
  description:
    "Professional web development and digital marketing agency. Custom website building, Next.js development, SEO services, and comprehensive digital solutions. Contact 3AM Devs today!",
  keywords: [
    "3am devs",
    "3am dev",
    "web development agency",
    "digital marketing agency",
    "website building agency",
    "custom website development",
    "next.js development",
    "professional web developers",
    "digital marketing services",
    "SEO services",
    "react development",
    "javascript developers",
    "website builders",
    "online marketing company",
    "web development services",
  ],
  authors: [{ name: "3AM Devs", url: "https://3amdevs.com" }],
  creator: "3AM Devs",
  publisher: "3AM Devs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "3AM Devs - Premier Web Development & Digital Marketing Agency",
    description:
      "Professional web development and digital marketing services. Custom websites, Next.js development, and comprehensive digital solutions.",
    url: "https://3amdevs.com",
    siteName: "3AM Devs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3AM Devs - Web Development & Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://3amdevs.com",
  },
  verification: {
    google: "OghXUAbv-wovzpKQkICb6uK4Puix3McYbSm1gAMuED0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <link rel="canonical" href="https://3amdevs.com" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="New Delhi" />
        <meta name="ICBM" content="28.6139, 77.2090" />
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
                "https://www.linkedin.com/company/3am-devs",
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
      <body className={inter.className}>
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
