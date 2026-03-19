import type { Metadata } from "next";
import localFont from "next/font/local";
import GoogleAnalytics from "./components/GoogleAnalytics";
import SchemaOrg from "./components/SchemaOrg";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Prepara tu PER – Practica el examen Patrón de Embarcaciones de Recreo",
  description:
    "Practica el examen PER con más de 600 preguntas de exámenes oficiales desde 2015 hasta 2024. Gratis, sin registro, desde el móvil.",
  keywords: [
    "PER",
    "Patrón de Embarcaciones de Recreo",
    "examen PER",
    "test PER online gratis",
    "preguntas examen PER",
    "simulacro examen PER",
    "preguntas PER 2024",
    "licencia náutica",
    "patron embarcaciones recreo preguntas",
  ],
  alternates: {
    canonical: "https://devben.github.io/per-questions/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Prepara tu PER – Practica el examen Patrón de Embarcaciones de Recreo",
    description:
      "Practica el examen PER con más de 600 preguntas de exámenes oficiales desde 2015 hasta 2024. Gratis, sin registro.",
    type: "website",
    locale: "es_ES",
    url: "https://devben.github.io/per-questions/",
    siteName: "Prepara tu PER",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prepara tu PER – Practica el examen PER gratis",
    description: "Más de 600 preguntas de exámenes PER oficiales. Sin registro, sin coste.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
