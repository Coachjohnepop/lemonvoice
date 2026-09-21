import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JsonLd } from "./components/json-ld";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, EMAIL, PHONE_TEL, SITE_URL } from "./lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Lemonvoice",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Lemonvoice",
  authors: [{ name: "Lemonvoice", url: SITE_URL }],
  creator: "Lemonvoice",
  publisher: "Lemonvoice",
  category: "business",
  keywords: [
    "custom business software",
    "order to cash software",
    "Sacramento software consulting",
    "robot lawn mowing Sacramento",
    "Segway Navimow",
    "AI lawn mowing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Lemonvoice",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Lemonvoice",
  url: SITE_URL,
  email: EMAIL,
  telephone: PHONE_TEL,
  description: DEFAULT_DESCRIPTION,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Greater Sacramento, California",
  },
  knowsAbout: [
    "custom business software",
    "order-to-cash systems",
    "robot lawn mowing",
    "Segway Navimow",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lemonvoice practices",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom business software",
          url: `${SITE_URL}/software`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Robot lawn mowing with Segway Navimow",
          url: `${SITE_URL}/ai-lawn`,
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <JsonLd data={organizationJsonLd} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
