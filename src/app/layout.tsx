import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonas´s Portfolio",
  description:
    "I’m a frontend software engineer bringing ideas to life through functional and intuitive interfaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className}  p-8 md:p-16 lg:pl-52 lg:pr-52 lg:pt-44 pb-9 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
