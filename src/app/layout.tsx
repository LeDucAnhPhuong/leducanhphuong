import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    template: "%s | Phuong's Portfolio",
    default: "About Me | Phuong's Portfolio",
  },
  icons: {
    icon: "/assets/icon.png",
  },
  openGraph: {
    images: ["/assets/background.png"],
    title: "About Me | Phuong's Portfolio",
    description: "This is Le Duc Anh Phuong's home page portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
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
