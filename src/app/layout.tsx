import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Footer, Header } from "@/components/custom/common";

export const metadata: Metadata = {
  title: "UniversityTech - Building Tomorrow's Tech Town",
  description:
    "Discover groundbreaking projects, innovative research, and collaborative partnerships that are transforming our city into a thriving technology hub.",
  keywords: "university, technology, innovation, research, projects, tech town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased w-screen overflow-x-hidden bg-[#f8f8f8]`}>
        <Header />
        {children}
        <Footer />
        <Toaster richColors closeButton visibleToasts={3} />
        <Analytics />
      </body>
    </html>
  );
}
