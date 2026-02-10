import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "HabitChain | Stake on Yourself",
  description: "Build lasting habits with real financial stakes on Base. Commit, self-attest check-ins recorded on-chain, and earn rewards for consistency.",
  keywords: ["habits", "web3", "blockchain", "staking", "base", "farcaster", "discipline"],
  openGraph: {
    title: "HabitChain | Stake on Yourself",
    description: "Build lasting habits with real financial stakes on Base.",
    url: "https://habitchain.xyz",
    siteName: "HabitChain",
    images: [
      {
        url: "/og-image.png", // Assuming an OG image exists or will be added
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="lazyOnload" />
        {children}
      </body>
    </html>
  );
}
