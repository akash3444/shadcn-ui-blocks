import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import { absoluteUrl, cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { WebSite, WithContext } from "schema-dts";
import { ThemeToggle } from "@/components/app-sidebar/theme-toggle";
import { CarbonAdTracker } from "@/components/carbon-ad-tracker";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider as BaseTooltipProvider } from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";
import { PackageManagerProvider } from "@/providers/package-manager-provider";
import { CSPostHogProvider } from "@/providers/posthog-provider";
import { PrimitiveProvider } from "@/providers/primitive-provider";
import { TooltipProvider as RadixTooltipProvider } from "@/registry/bases/radix/ui/tooltip";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        height: 630,
        width: 1200,
        alt: siteConfig.title,
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
    name: siteConfig.name,
    url: absoluteUrl("/"),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
          inter.variable,
          geistMono.variable,
          satoshi.variable,
          "font-sans antialiased"
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
