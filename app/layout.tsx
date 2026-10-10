import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "../styles/globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Connell Boyce",
  description: "Full Stack Developer, always learning!",
};

const navItems = [
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${josefinSans.variable} font-sans`}>
        <Header navItems={navItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
