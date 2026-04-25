import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Providers } from "./Providers";
import {
  AUTHOR_NAME,
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
} from "./_utils/seo";
import "./globals.css";

const fontHeading = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: "600",
});

const fontBody = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    creator: TWITTER_HANDLE,
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"
        />
      </head>
      <body
        className={cn(
          "relative antialiased min-h-screen",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Providers>
          <Header />
          {children}
          <div className="h-[64px]" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
