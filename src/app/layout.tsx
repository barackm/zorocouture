import "aos/dist/aos.css";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AosProvider from "@/components/AosProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoro Couture | Professional Tailoring Services",
  description:
    "Expert tailoring services offering bespoke suits, alterations, and custom clothing.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
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
        <AosProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
