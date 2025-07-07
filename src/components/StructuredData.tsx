export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "3AM Devs",
    alternateName: ["3AM Dev", "3 AM Devs", "Three AM Devs", "3AM Developers", "3AM Devs Agency", "3AM Devs Digital Solutions", "3AM Devs Web Development", "3AM Devs Digital Marketing", "3AM Devs Next.js Experts", "3AM Devs React Specialists", "3AM Devs Custom Software", "3AM Devs SEO Services", "3AM Devs Website Builders"],
    url: "https://3amdevs.com",
    logo: {
      "@type": "ImageObject",
      url: "https://3amdevs.com/logo.png",
      width: 300,
      height: 100,
    },
    image: "https://3amdevs.com/og-image.jpg",
    description:
      "Professional web development and digital marketing agency specializing in custom website building, Next.js development, and comprehensive digital solutions.",
    email: "3amdevss@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
    },
    sameAs: [
      "https://linkedin.com/company/3am-devs",
      "https://github.com/vatsalvyas1",
    ],
    founder: [
  { "@type": "Person", name: "Vatsal Vyas" },
  { "@type": "Person", name: "Rajat Mangla" },
  { "@type": "Person", name: "Prince Jha" }
],
    foundingDate: "2025",
    numberOfEmployees: "2-10",
    knowsAbout: [
      "Web Development",
      "Digital Marketing",
      "Next.js Development",
      "React Development",
      "SEO Services",
      "Website Building",
      "JavaScript Development",
      "Custom Software Development",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development Services",
          description: "Custom website development using modern technologies",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing Services",
          description: "Comprehensive digital marketing and SEO solutions",
        },
      },
    ],
  };

  const webSiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "3AM Devs",
    url: "https://3amdevs.com",
    description: "Professional web development and digital marketing agency",
    publisher: {
      "@type": "Organization",
      name: "3AM Devs",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://3amdevs.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteData) }}
      />
    </>
  );
}
