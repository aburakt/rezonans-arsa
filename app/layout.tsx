import { ParallaxProvider } from "@/components/providers/parallax-provider";
import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google';
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})


export const metadata: Metadata = {
  title: "Rezonans Arsa",
  description: "Rezonans Arsa Hakkında",
  icons: {
    icon: "./favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${openSans.variable}`}>
      <body className="font-sans antialiased">
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
}
