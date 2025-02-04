import "aos/dist/aos.css";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AosProvider from "@/components/AosProvider";
import { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Work_Sans } from "next/font/google";
import { FooterVisibilityProvider } from "@/context/FooterVisibilityContext";
import LocalBusiness from "@/components/LocalBusiness";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const googleVerificationId = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://zorocouture.com"),
  title: {
    default: "Zoro Couture | Atelier de Couture à Goma, RDC",
    template: "%s | Zoro Couture",
  },
  description:
    "Atelier de couture professionnel à Goma, RDC. Spécialisé dans la haute couture, vêtements sur mesure, et design de mode.",
  keywords: [
    "zoro couture",
    "zoro veste",
    "zoro couture goma",
    "couture goma",
    "atelier de couture rdc",
    "haute couture goma",
    "tailleur goma",
    "vêtements sur mesure rdc",
    "mode africaine",
    "fashion design goma",
    "couturier professionnel",
    "veste sur mesure",
    "costume africain",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://zorocouture.com",
    siteName: "Zoro Couture",
    title: "Zoro Couture | Services de Couture Professionnelle",
    description:
      "Services de couture expert offrant des costumes sur mesure, des retouches et des vêtements personnalisés.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zoro Couture - Atelier de Haute Couture",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zorocouture",
    title: "Zoro Couture | Services de Couture Professionnelle",
    description:
      "Services de couture expert offrant des costumes sur mesure, des retouches et des vêtements personnalisés.",
    images: ["/page1.jpeg"],
    creator: "@zorocouture",
  },
  alternates: {
    canonical: "https://zorocouture.com",
    languages: {
      "fr-FR": "https://zorocouture.com",
    },
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
  verification: {
    google: googleVerificationId,
  },
  icons: {
    icon: "/logo2.png",
  },
  other: {
    "theme-color": "#ffffff",
    "x-ua-compatible": "IE=edge",
    "format-detection": "telephone=no",
    "apple-mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={workSans.variable}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="min-h-screen flex flex-col font-work-sans overflow-x-hidden">
        <LocalBusiness />
        <FooterVisibilityProvider>
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics
              GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
            />
          )}
          <AosProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </AosProvider>
        </FooterVisibilityProvider>
      </body>
    </html>
  );
}
