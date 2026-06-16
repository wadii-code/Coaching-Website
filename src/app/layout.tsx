import type { Metadata } from "next";
import { Inter, Bebas_Neue, Barlow_Condensed } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "3OCTBR — Elite Performance Coaching",
    template: "%s · 3OCTBR",
  },
  description:
    "Elite, data-driven coaching for fat loss, muscle building, and sports performance. Train with intent. Transform with proof.",
  keywords: [
    "personal training",
    "online coaching",
    "fat loss",
    "muscle building",
    "sports performance",
    "3OCTBR",
  ],
  openGraph: {
    type: "website",
    title: "3OCTBR — Elite Performance Coaching",
    description:
      "Elite, data-driven coaching for fat loss, muscle building, and sports performance.",
    url: siteUrl,
    siteName: "3OCTBR",
    images: [
      {
        url: "/images/hero-poster.png",
        width: 2048,
        height: 1152,
        alt: "3OCTBR — Elite Performance Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3OCTBR — Elite Performance Coaching",
    description:
      "Elite, data-driven coaching for fat loss, muscle building, and sports performance.",
    images: ["/images/hero-poster.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} ${barlow.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
