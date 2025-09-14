// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "./../styles/theme.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "DasomaTrading",
  description:
    "Dasoma Trading is a conglomerate based in Addis Ababa, Ethiopia, with businesses spanning automotive, trading, tourism, events, mega projects, and more.",
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
    <html lang="en">
      <body className="bg-black text-white font-sans antialiased">
        {/* Global Layout */}
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
