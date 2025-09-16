import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { websiteSchema, portfolioSchema } from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anand Kumar Sharma | Developer",
  description: "portfolio of Anand Sharma, a web/mobile app developer, Gen AI engineer, and UI/UX designer with 4+ years of experience.",
  keywords: ["web developer", "frontend developer","vibe coding", "UI/UX designer", "portfolio", "React developer", "Next.js", "Gen AI engineer", 'nodejs', 'mongodb', 'typescript', 'react', 'nextjs', 'tailwindcss', 'vercel', 'AWS', 'GenAI', "Desktop", "Application", "Website", "App", "Software", "Ecommerce", "Portfolio"],
  authors: [{ name: "Anand Kumar Sharma" }],
  creator: "Anand Kumar Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anandsharma.info",
    title: "Anand | Professional Web Developer Portfolio",
    description: "Professional portfolio of Anand Sharma, a web/mobile app developer, Gen AI engineer, and UI/UX designer with 3+ years of experience.",
    siteName: "Anand",
    images: [{
      url: "/logo.png",
      width: 1200,
      height: 630,
      alt: "Anand"
    }],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="https://botfusion-ten.vercel.app/embed.js" data-chatbot-id="bf_02480b5d799f014ef7728a23dddae6dd" strategy="afterInteractive"></Script>
      </body>
    </html>
  );
}
