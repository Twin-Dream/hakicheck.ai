import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
});

const siteName = "Hakicheck";
const description =
  "HakiCheck helps you review and analyze legal contracts in Kenya using AI. Upload employment, lease, or supplier agreements and get clause-by-clause risk insights instantly.";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: `${siteName} | AI Legal Contract Analyzer`,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url: new URL(defaultUrl),
    siteName,
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Kenya",
    "contract review",
    "legal tech",
    "AI lawyer",
    "non-compete",
    "employment contract",
    "HakiCheck",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: new URL(defaultUrl),
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sen.variable} antialiased`}>{children}</body>
    </html>
  );
}
