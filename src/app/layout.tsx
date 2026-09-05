import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mcdrlo.com"),
  title: {
    default: "MC DRLO | Mestre de Cerimónias Profissional",
    template: "%s | MC DRLO",
  },
  description:
    "Mestre de Cerimónias Profissional premiado, especializado em eventos corporativos, conferências internacionais, casamentos de luxo e cerimónias governamentais de alto nível em toda a Europa e além.",
  keywords: [
    "Master of Ceremonies",
    "MC Portugal",
    "Corporate Events MC",
    "Luxury Wedding MC",
    "Conference Host",
    "Event Host Europe",
    "Award Ceremony Host",
    "DRLO MC",
    "Mestre de Cerimónias",
    "Profissional de Eventos",
  ],
  authors: [{ name: "MC DRLO" }],
  creator: "MC DRLO",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://mcdrlo.com",
    siteName: "MC DRLO",
    title: "MC DRLO | Mestre de Cerimónias Profissional",
    description:
      "A voz por detrás de eventos inesquecíveis. Mestre de Cerimónias profissional especializado em eventos corporativos, casamentos de luxo, conferências e cerimónias governamentais.",
    images: [
      {
        url: "/media/MANICA_367.jpg",
        width: 1200,
        height: 630,
        alt: "MC DRLO — Mestre de Cerimónias Profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MC DRLO | Mestre de Cerimónias Profissional",
    description:
      "A voz por detrás de eventos inesquecíveis. Mestre de Cerimónias profissional especializado em eventos corporativos, casamentos de luxo e conferências.",
    images: ["/media/MANICA_367.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "MC DRLO",
              jobTitle: "Mestre de Cerimónias Profissional",
              description:
                "Mestre de Cerimónias Profissional premiado, especializado em eventos corporativos, conferências, casamentos de luxo e cerimónias governamentais de alto perfil.",
              url: "https://mcdrlo.com",
              sameAs: [
                "https://instagram.com/mcdrlo",
                "https://linkedin.com/in/mcdrlo",
              ],
              knowsAbout: [
                "Corporate Event Hosting",
                "Conference Moderation",
                "Luxury Wedding MC",
                "Government Ceremony Protocol",
                "Award Ceremony Hosting",
                "Public Speaking",
                "Event Protocol",
              ],
              availableLanguage: ["Portuguese", "English", "French"],
              areaServed: {
                "@type": "GeoCircle",
                description: "Europe and International",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-primary text-secondary selection:bg-accent selection:text-primary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
