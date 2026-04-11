import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD Ripon Islam | Fullstack Developer",
  description:
    "MD Ripon Islam - Fullstack Developer from Nilphamari, Bangladesh. Expert in React, Next.js, Node.js, Express, Nest.js, GraphQL, MongoDB, and more. Building dynamic web applications.",
  keywords: [
    "MD Ripon Islam",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Nilphamari",
    "Bangladesh",
    "Web Developer",
  ],
  authors: [{ name: "MD Ripon Islam" }],
  creator: "MD Ripon Islam",
  openGraph: {
    title: "MD Ripon Islam | Fullstack Developer",
    description:
      "MD Ripon Islam - Fullstack Developer from Nilphamari, Bangladesh. Expert in React, Next.js, Node.js, and more.",
    url: "https://ripon.dev",
    siteName: "MD Ripon Islam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Ripon Islam | Fullstack Developer",
    creator: "@ripon876_",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
