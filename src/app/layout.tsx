import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "variable",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Conciergerie Bunel — Guadeloupe",
  description:
    "Logements meublés & conciergerie en Guadeloupe. La Conciergerie Bunel vous accompagne pour un séjour sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${manrope.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
