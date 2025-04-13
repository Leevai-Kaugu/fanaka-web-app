import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import favicon from "@/app/favicon.svg"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fanaka Website",
  description: "The new Fanaka website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-[100vh] flex flex-col justify-between">
          {}
          {children}
          <div className="bg-foreground text-background flex w-[100%] justify-between items-center p-[20px]">
          <p>Copyright © {currentYear} Fanaka Tech. All rights reserved.</p>
          <div>
            <ul className="flex">
              <li className="m-[10px]"><Link href="/">Home</Link></li>
              <li className="m-[10px]"><Link href="about">About</Link></li>
              <li className="m-[10px]"><Link href="contact">Contact</Link></li>
              <li className="m-[10px]"><Link href="career">Career</Link></li>
              <li className="m-[10px]"><Link href="lms">LMS Konnekt</Link></li>
            </ul>
          </div>
        </div>
        </div>
      </body>
    </html>
  );
}
