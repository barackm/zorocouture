import "aos/dist/aos.css";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AosProvider from "@/components/AosProvider";
import { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Zoro Couture | Services de Couture Professionnelle",
  description:
    "Services de couture expert offrant des costumes sur mesure, des retouches et des vêtements personnalisés.",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    images: "/page.jpg",
  },
  twitter: {
    card: "summary_large_image",
    images: "/page.jpg",
  },
  icons: {
    icon: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
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
