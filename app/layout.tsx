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
    "MD Ripon Islam - Fullstack Developer from Nilphamari, Bangladesh. Expert in React js, Next js, Node js, Express js, Nest js, GraphQL, MongoDB, and more. Building dynamic web applications.",
  keywords: [
    "MD Ripon Islam",
    "Fullstack Developer",
    "React Developer",
    "Next js Developer",
    "Node js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Nilphamari",
    "Bangladesh",
    "Web Developer",
    "ripon876",
  ],
  authors: [{ name: "MD Ripon Islam" }],
  creator: "MD Ripon Islam",
  openGraph: {
    title: "MD Ripon Islam | Fullstack Developer",
    description:
      "MD Ripon Islam - Fullstack Developer from Nilphamari, Bangladesh. Expert in React js, Next js, Node js, and more.",
    url: "https://ripon.dev",
    siteName: "MD Ripon Islam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "MD Ripon Islam | Fullstack Developer",
    creator: "@ripon876_",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ripon.dev",
  },
  category: "technology",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "MD Ripon Islam",
              alternateName: "MD Ripon Islam",
              description:
                "Fullstack Developer from Nilphamari, Bangladesh. Expert in React js, Next js, Node js, and more.",
              gender: "Male",
              url: "https://ripon.dev",
              email: "mdriponislam.dev@gmail.com",
              jobTitle: "Fullstack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Arnifi Corporate Service Providers L.L.C",
                sameAs: ["https://arnifi.com"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nilphamari",
                addressCountry: "BD",
              },
              nationality: "Bangladesh",
              sameAs: [
                "https://github.com/ripon876",
                "https://linkedin.com/in/ripon876",
                "https://twitter.com/ripon876_",
                "https://facebook.com/ripon876",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
