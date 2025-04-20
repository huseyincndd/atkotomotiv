import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "ATK Otomotiv - Taşıt Koltukları",
  description: "Türkiye'nin lider taşıt koltukları üreticisi. Otobüs, kamyon, sürücü, askeri ve özel tasarım koltuk çözümleri.",
  keywords: "taşıt koltukları, otomotiv koltuk, otobüs koltuğu, kamyon koltuğu, askeri koltuk, ATK Otomotiv",
  authors: [{ name: "ATK Otomotiv" }],
  creator: "ATK Otomotiv",
  publisher: "ATK Otomotiv",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: "ATK Otomotiv - Kalite ve Konfor",
    description: "Türkiye'nin lider taşıt koltukları üreticisi. 40+ yıllık tecrübe.",
    images: [{
      url: 'https://villaqrmenu.b-cdn.net/images%20(2).jpeg',
      width: 1200,
      height: 630,
      alt: 'ATK Otomotiv Logo',
    }],
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="!scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://villaqrmenu.b-cdn.net/images%20(2).jpeg" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Sayfa yüklendiğinde scrollu en üste çekmek için
            if (typeof window !== 'undefined') {
              window.onload = function() {
                window.scrollTo(0, 0);
              }
            }
          `
        }} />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
