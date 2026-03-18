import type { Metadata } from "next";
import localFont from "next/font/local";
import GoogleAnalytics from "./components/GoogleAnalytics";
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
    "test PER",
    "preguntas PER",
    "licencia náutica",
  ],
  openGraph: {
    title: "Prepara tu PER – Practica el examen Patrón de Embarcaciones de Recreo",
    description:
      "Practica el examen PER con más de 600 preguntas de exámenes oficiales desde 2015 hasta 2024. Gratis, sin registro.",
    type: "website",
    locale: "es_ES",
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
        {children}
      </body>
    </html>
  );
}
