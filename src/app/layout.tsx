import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const SITE_URL = "https://spvoyages.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SP Voyages — Vols secs et traversées vers l'Algérie, le Maroc, la Tunisie",
  description:
    "Agence spécialisée dans les vols secs et traversées en ferry vers l'Algérie, le Maroc et la Tunisie. 11 compagnies aériennes et maritimes, devis sous 24 h ouvrées, sans forfait imposé.",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/img/logo.png", type: "image/png" },
    ],
    apple: "/img/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "SP Voyages",
    title: "SP Voyages — Vols et traversées vers l'Algérie, le Maroc, la Tunisie",
    description:
      "Vols secs et traversées en ferry vers le Maghreb. 11 compagnies partenaires, devis personnalisé sous 24 h ouvrées.",
    images: ["/img/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "SP Voyages — Vols et traversées vers l'Algérie, le Maroc, la Tunisie",
    description:
      "Vols secs et traversées en ferry vers le Maghreb. 11 compagnies partenaires, devis sous 24 h ouvrées.",
    images: ["/img/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#16301f",
};

const openingHours = [
  "Mo-Th 09:30-12:00,14:00-18:00",
  "Fr 09:30-12:00,14:00-18:00",
  "Sa 09:30-12:00",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${SITE_URL}/#lyon`,
      name: "SP Voyages — Lyon 3",
      url: SITE_URL,
      logo: `${SITE_URL}/img/logo.png`,
      image: `${SITE_URL}/img/logo.png`,
      telephone: "+33478626508",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "12 Rue Montebello",
        postalCode: "69003",
        addressLocality: "Lyon",
        addressCountry: "FR",
      },
      geo: { "@type": "GeoCoordinates", latitude: 45.755833, longitude: 4.842488 },
      openingHoursSpecification: openingHours,
      areaServed: ["Algérie", "Maroc", "Tunisie", "France"],
    },
    {
      "@type": "TravelAgency",
      "@id": `${SITE_URL}/#venissieux`,
      name: "SP Voyages — Vénissieux",
      url: SITE_URL,
      logo: `${SITE_URL}/img/logo.png`,
      image: `${SITE_URL}/img/logo.png`,
      telephone: "+33973880987",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "17 Avenue Jean Cagne",
        postalCode: "69200",
        addressLocality: "Vénissieux",
        addressCountry: "FR",
      },
      geo: { "@type": "GeoCoordinates", latitude: 45.6967926, longitude: 4.8711123 },
      openingHoursSpecification: openingHours,
      areaServed: ["Algérie", "Maroc", "Tunisie", "France"],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,400..800;1,62..125,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Archivo', system-ui, sans-serif" }}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
