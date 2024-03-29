import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "Prisão do Dabarra",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <Navigation />
        <div className="relative">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
