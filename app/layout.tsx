import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import AnimatedGridBackground from "./components/AnimatedGridBackground";
import Footer from "./components/Footer";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://matheus-calonico.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matheus Calonico - Desenvolvedor Full Stack",
  description: "Portfólio de Matheus Calonico, desenvolvedor Full Stack apaixonado por design e performance. Veja meus projetos e conhecimentos.",
  keywords: ["desenvolvedor", "full stack", "React", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: "Matheus Calonico", url: baseUrl }],
  creator: "Matheus Calonico",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Matheus Calonico - Desenvolvedor Full Stack",
    description: "Portfólio de Matheus Calonico, desenvolvedor Full Stack",
    siteName: "Matheus Calonico Portfolio",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Matheus Calonico Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Calonico - Desenvolvedor Full Stack",
    description: "Portfólio de Matheus Calonico, desenvolvedor Full Stack",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        <AnimatedGridBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
