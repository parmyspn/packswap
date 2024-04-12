import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PackSwap",
  description: "Send or deliver packages from/to anywhere in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <AuthProvider>
        <body className={inter.className}>
          <NavBar />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
