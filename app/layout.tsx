import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import GradientBg from "@/components/GradientBg";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tipu Electrics",
  description: "Electrical services and solutions",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className="relative">
          <div className="z-50">
            <Header />
          </div>
          <div className="z-0">{children}</div>
          <GradientBg />
        </div>
      </body>
    </html>
  );
}
