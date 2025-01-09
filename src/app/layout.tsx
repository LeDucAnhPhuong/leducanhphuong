import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    template: "%s | Phuong's Portfolio",
    default: "About Me | Phuong's Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/icon.png" />
      </Head>
      <body className={`bg-background antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
