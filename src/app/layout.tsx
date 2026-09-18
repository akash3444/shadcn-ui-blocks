import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { absoluteUrl, cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { WebSite, WithContext } from "schema-dts";
import { ThemeToggle } from "@/components/app-sidebar/theme-toggle";
import { CarbonAdTracker } from "@/components/carbon-ad-tracker";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider as BaseTooltipProvider } from "@/components/ui/tooltip";
import { PackageManagerProvider } from "@/providers/package-manager-provider";
import { CSPostHogProvider } from "@/providers/posthog-provider";
import { PrimitiveProvider } from "@/providers/primitive-provider";
import { TooltipProvider as RadixTooltipProvider } from "@/registry/bases/radix/ui/tooltip";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/satoshi/Satoshi-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

const geistMono = Geist_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: "Shadcn UI Blocks & Components",
    template: "%s | Shadcn UI Blocks",
  },
  description:
    "Browse ready-to-use shadcn/ui blocks and components. Preview designs, copy code, and add them to your project.",
  icons: [
    {
      url: "/images/apple-touch-icon.png",
      type: "image/png",
      rel: "apple-touch-icon",
    },
    {
      sizes: "16x16",
      url: "/images/favicon-16x16.png",
      type: "image/png",
      rel: "icon",
    },
    {
      sizes: "32x32",
      url: "/images/favicon-32x32.png",
      type: "image/png",
      rel: "icon",
    },
  ],
  openGraph: {
    title: "Shadcn UI Blocks & Components",
    description:
      "Browse ready-to-use shadcn/ui blocks and components. Preview designs, copy code, and add them to your project.",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        height: 630,
        width: 1200,
        alt: "Shadcn UI Blocks & Components",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shadcn UI Blocks",
    url: absoluteUrl("/"),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          crossOrigin="anonymous"
          href="https://cdn.fontshare.com"
          rel="preconnect"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@1&display=swap"
          rel="stylesheet"
        />
        <script
          data-domain="www.shadcnui-blocks.com"
          data-website-id="67bf0ef528e2eaab259e0c50"
          defer
          src="https://datafa.st/js/script.js"
        />
        <meta content="ca-pub-4493596981598123" name="google-adsense-account" />
      </head>
      <body
        className={cn(
          geist.variable,
          geistMono.variable,
          satoshi.variable,
          "font-normal font-sans antialiased"
        )}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
          type="application/ld+json"
        />

        <CarbonAdTracker />
        <CSPostHogProvider>
          <ThemeProvider attribute="class">
            <BaseTooltipProvider>
              <RadixTooltipProvider>
                <PackageManagerProvider>
                  <PrimitiveProvider>{children}</PrimitiveProvider>
                </PackageManagerProvider>
                <div className="fixed right-6 bottom-6">
                  <ThemeToggle />
                </div>
                <Toaster />
              </RadixTooltipProvider>
            </BaseTooltipProvider>
          </ThemeProvider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
