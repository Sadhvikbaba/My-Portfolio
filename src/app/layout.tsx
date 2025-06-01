import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "sadhvik baba",
  description: "Portfolio of Sadhvik Baba Patibandla Full Stack Developer, Open Source Contributor, and AI Enthusiast.",
  keywords: "Sadhvik Baba, MERN, Full Stack, AI, Next.js, Portfolio, Developer, React, MongoDB, Express, Node.js",
  authors: [{ name: "Sadhvik Baba Patibandla" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "Po7Ls--6WZuhoIZwS7aHdl15TnB1ERDowY-tBVNlbCg",
  },
  openGraph: {
    title: "Sadhvik Baba | MERN Developer",
    description: "Explore the projects and skills of Sadhvik Baba a passionate full stack web developer with AI/ML interest.",
    url: "https://my-portfolio-khaki-two-52.vercel.app",
    type: "website",
    images: [
      {
        url: "https://my-portfolio-khaki-two-52.vercel.app/og-image.jpg",
        alt: "Sadhvik Baba Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest", // if you have a manifest
  alternates: {
    canonical: "https://my-portfolio-khaki-two-52.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
