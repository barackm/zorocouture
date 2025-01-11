import "aos/dist/aos.css";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AosProvider from "@/components/AosProvider";
import { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Zoro Couture | Services de Couture Professionnelle",
  description:
    "Services de couture expert offrant des costumes sur mesure, des retouches et des vêtements personnalisés.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
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
        url: "/page1.jpeg",
        width: 1200,
        height: 630,
        alt: "Zoro Couture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoro Couture | Services de Couture Professionnelle",
    description:
      "Services de couture expert offrant des costumes sur mesure, des retouches et des vêtements personnalisés.",
    images: ["/page1.jpeg"],
    creator: "@zorocouture",
  },
  icons: {
    icon: "/logo2.png",
  },
  other: {
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
      </body>
    </html>
  );
}
