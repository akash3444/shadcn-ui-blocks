import {
  DM_Sans,
  Figtree,
  Geist,
  Geist_Mono,
  Inter,
  JetBrains_Mono,
  Lora,
  Merriweather,
  Noto_Sans,
  Noto_Serif,
  Nunito_Sans,
  Outfit,
  Playfair_Display,
  Public_Sans,
  Raleway,
  Roboto,
  Roboto_Slab,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const FONTS = [
  { name: "Geist", value: "geist", font: geistSans, type: "sans" as const },
  { name: "Inter", value: "inter", font: inter, type: "sans" as const },
  { name: "Noto Sans", value: "noto-sans", font: notoSans, type: "sans" as const },
  {
    name: "Nunito Sans",
    value: "nunito-sans",
    font: nunitoSans,
    type: "sans" as const,
  },
  { name: "Figtree", value: "figtree", font: figtree, type: "sans" as const },
  { name: "Roboto", value: "roboto", font: roboto, type: "sans" as const },
  { name: "Raleway", value: "raleway", font: raleway, type: "sans" as const },
  {
    name: "DM Sans",
    value: "dm-sans",
    font: dmSans,
    type: "sans" as const,
  },
  {
    name: "Public Sans",
    value: "public-sans",
    font: publicSans,
    type: "sans" as const,
  },
  { name: "Outfit", value: "outfit", font: outfit, type: "sans" as const },
  {
    name: "Geist Mono",
    value: "geist-mono",
    font: geistMono,
    type: "mono" as const,
  },
  {
    name: "JetBrains Mono",
    value: "jetbrains-mono",
    font: jetbrainsMono,
    type: "mono" as const,
  },
  {
    name: "Noto Serif",
    value: "noto-serif",
    font: notoSerif,
    type: "serif" as const,
  },
  {
    name: "Roboto Slab",
    value: "roboto-slab",
    font: robotoSlab,
    type: "serif" as const,
  },
  {
    name: "Merriweather",
    value: "merriweather",
    font: merriweather,
    type: "serif" as const,
  },
  { name: "Lora", value: "lora", font: lora, type: "serif" as const },
  {
    name: "Playfair Display",
    value: "playfair-display",
    font: playfairDisplay,
    type: "serif" as const,
  },
] as const;

export type Font = (typeof FONTS)[number];
