import { IBM_Plex_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Providers } from "./Providers";
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

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
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
