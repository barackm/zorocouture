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
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    images: "/page1.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    images: "/page1.jpeg",
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
    <html lang="fr" className={workSans.variable}>
      <body className="min-h-screen flex flex-col font-work-sans">
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
