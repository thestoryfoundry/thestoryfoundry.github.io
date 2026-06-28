import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thestoryfoundry.github.io"),
  title: "StoryFoundry — Social Media Company",
  description: "StoryFoundry turns brand ideas into social stories people remember through strategy, content, community, and insights.",
  openGraph: {
    title: "StoryFoundry — Social Media Company",
    description: "We turn brand ideas into social stories people remember.",
    url: "https://thestoryfoundry.github.io/",
    siteName: "StoryFoundry",
    locale: "en_US",
    type: "website",
  },
};

import dynamic from "next/dynamic";
import { LenisProvider } from "@/providers/LenisProvider";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} bg-background text-text-primary antialiased relative`}
      >
        <div
          className="fixed inset-0 pointer-events-none z-[200] opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
