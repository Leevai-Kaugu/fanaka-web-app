
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <div className="h-fit flex flex-col justify-between">
          {children}
          <div className="bg-foreground text-background flex md:flex-row flex-col-reverse w-full justify-between items-center p-[20px] mt-[35vh]">
            <p className="w-full md:w-1/2 text-center md:text-start mt-10 md:mt-[0px]">Copyright © {currentYear} Fanaka Tech. All rights reserved.</p>
            <div>
              <ul className="grid grid-cols-2 md:grid-cols-6 text-center md:text-start ">
                <li className="m-[10px] hover:text-fp transition-all duration-300 ease-in"><Link href="/">Home</Link></li>
                <li className="m-[10px] hover:text-fp transition-all duration-300 ease-in"><Link href="partners">Partners</Link></li>
                <li className="m-[10px] hover:text-fp transition-all duration-300 ease-in"><Link href="about">About</Link></li>
                <li className="m-[10px] hover:text-fp transition-all duration-300 ease-in"><Link href="contact">Contact</Link></li>
                <li className="m-[10px] hover:text-fp transition-all duration-300 ease-in"><Link href="career">Careers</Link></li>
                <li className="m-[10px] hover:text-fp transition-all duration-300 ease-in"><Link href="contact">Contact Us</Link></li>
              </ul>
            </div>
        </div>
        </div>
      </body>
    </html>
  );
}
