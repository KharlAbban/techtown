import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Footer, Header } from "@/components/custom/common";
import {
  APP_BASE_URL,
  APP_DESCRIPTION,
  APP_KEYWORDS,
  APP_LOGO_OG_URL,
  APP_LOGO_URL,
  APP_TAGLINE,
  APP_TITLE,
} from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(APP_BASE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  title: {
    default: `${APP_TITLE} - ${APP_TAGLINE}`,
    template: `%s | ${APP_TITLE}`,
  },
  keywords: APP_KEYWORDS,
  description: APP_DESCRIPTION,
  icons: [{ rel: "icon", url: APP_LOGO_URL }],
  openGraph: {
    title: {
      default: `${APP_TITLE} - ${APP_TAGLINE}`,
      template: `%s | ${APP_TITLE}`,
    },
    description: APP_DESCRIPTION,
    url: APP_BASE_URL,
    siteName: APP_TITLE,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: APP_LOGO_OG_URL,
        width: 1200,
        height: 630,
        alt: `${APP_TITLE} - ${APP_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    creator: "@ktu_official",
    images: [APP_LOGO_OG_URL],
    site: "@ktu_official",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  height: "device-height",
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
