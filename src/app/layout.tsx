import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { WebSite, WithContext } from "schema-dts";
import { ThemeToggle } from "@/components/app-sidebar/theme-toggle";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PackageManagerProvider } from "@/providers/package-manager-provider";
import { CSPostHogProvider } from "@/providers/posthog-provider";

const inter = localFont({
  src: [
    { path: "./fonts/InterVariable.woff2", weight: "100 900", style: "normal" },
    {
      path: "./fonts/InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Customized Shadcn UI Blocks & Components | Preview & Copy",
  description:
    "Explore a curated collection of customized Shadcn UI blocks and components. Preview, customize, and copy ready-to-use code snippets to streamline your web development workflow. Perfect for creating responsive, high-quality Shadcn UI designs with ease.",
  keywords: [
    "Shadcn UI blocks",
    "Shadcn UI components",
    "Shadcn UI previews",
    "UI blocks for developers",
    "Shadcn UI code snippets",
    "Shadcn UI examples",
    "Shadcn UI customization",
    "Free Shadcn UI blocks",
    "Preview Shadcn UI components",
    "Shadcn UI examples for websites",
    "Copy Shadcn UI code snippets",
    "UI design components",
    "UI design blocks",
    "Customized Shadcn UI blocks",
    "Custom Shadcn UI components",
  ],
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
    title: "Customized Shadcn UI Blocks & Components | Preview & Copy",
    description:
      "Explore a curated collection of customized Shadcn UI blocks and components. Preview, customize, and copy ready-to-use code snippets to streamline your web development workflow. Perfect for creating responsive, high-quality Shadcn UI designs with ease.",
    type: "website",
    images: [
      {
        url: "/api/og",
        height: 630,
        width: 1200,
        alt: "Effortless Shadcn UI Component Previews & Code Snippets",
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
    url: "https://${process.env.NEXT_PUBLIC_APP_URL}",
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
      <body className={cn(inter.variable, geistMono.variable, "antialiased")}>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
          type="application/ld+json"
        />

        <CSPostHogProvider>
          <ThemeProvider attribute="class">
            <TooltipProvider>
              <PackageManagerProvider>{children}</PackageManagerProvider>
              <div className="fixed right-6 bottom-6">
                <ThemeToggle />
              </div>
            </TooltipProvider>
          </ThemeProvider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
