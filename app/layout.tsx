import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EchoSee - Smart Glasses with Real-Time Subtitles",
  description: "Revolutionary smart glasses with real-time speech-to-text subtitles for the hearing-impaired community. Empowering independence through technology.",
  keywords: ["smart glasses", "hearing impaired", "real-time subtitles", "assistive technology", "accessibility"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
