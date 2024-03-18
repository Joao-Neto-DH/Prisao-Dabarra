import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/Components/Navigation";

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
        {children}
      </body>
    </html>
  );
}
