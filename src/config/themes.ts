export const defaultThemeConfig = {
  light: {
    background: "0 0% 100%",
    foreground: "222.2 84% 4.9%",
    card: "0 0% 100%",
    "card-foreground": "222.2 84% 4.9%",
    popover: "0 0% 100%",
    "popover-foreground": "222.2 84% 4.9%",
    primary: "222.2 47.4% 11.2%",
    "primary-foreground": "210 40% 98%",
    secondary: "210 40% 96.1%",
    "secondary-foreground": "222.2 47.4% 11.2%",
    muted: "210 40% 96.1%",
    "muted-foreground": "215.4 16.3% 46.9%",
    accent: "210 40% 96.1%",
    "accent-foreground": "222.2 47.4% 11.2%",
    destructive: "0 84.2% 60.2%",
    "destructive-foreground": "210 40% 98%",
    border: "214.3 31.8% 91.4%",
    input: "214.3 31.8% 91.4%",
    ring: "222.2 84% 4.9%",
    "chart-1": "12 76% 61%",
    "chart-2": "173 58% 39%",
    "chart-3": "197 37% 24%",
    "chart-4": "43 74% 66%",
    "chart-5": "27 87% 67%",
    radius: "0.5rem",
    "sidebar-background": "210 40% 98%",
    "sidebar-foreground": "240 5.3% 26.1%",
    "sidebar-primary": "240 5.9% 10%",
    "sidebar-primary-foreground": "0 0% 98%",
    "sidebar-accent": "214.3 31.8% 91.4%",
    "sidebar-accent-foreground": "240 5.9% 10%",
    "sidebar-border": "220 13% 91%",
    "sidebar-ring": "217.2 91.2% 59.8%",
  },
  dark: {
    background: "222.2 84% 4.9%",
    foreground: "210 40% 98%",
    card: "222.2 84% 4.9%",
    "card-foreground": "210 40% 98%",
    popover: "222.2 84% 4.9%",
    "popover-foreground": "210 40% 98%",
    primary: "210 40% 98%",
    "primary-foreground": "222.2 47.4% 11.2%",
    secondary: "217.2 32.6% 17.5%",
    "secondary-foreground": "210 40% 98%",
    muted: "217.2 32.6% 17.5%",
    "muted-foreground": "215 20.2% 65.1%",
    accent: "217.2 32.6% 17.5%",
    "accent-foreground": "210 40% 98%",
    destructive: "0 84.2% 60.2%",
    "destructive-foreground": "210 40% 98%",
    border: "217.2 32.6% 17.5%",
    input: "217.2 32.6% 17.5%",
    ring: "212.7 26.8% 83.9%",
    "chart-1": "220 70% 50%",
    "chart-2": "160 60% 45%",
    "chart-3": "30 80% 55%",
    "chart-4": "280 65% 60%",
    "chart-5": "340 75% 55%",
    "sidebar-background": "222.2 84% 4.9%",
    "sidebar-foreground": "240 4.8% 95.9%",
    "sidebar-primary": "224.3 76.3% 48%",
    "sidebar-primary-foreground": "0 0% 100%",
    "sidebar-accent": "217.2 32.6% 17.5%",
    "sidebar-accent-foreground": "240 4.8% 95.9%",
    "sidebar-border": "240 3.7% 15.9%",
    "sidebar-ring": "217.2 91.2% 59.8%",
  },
};

export const themes = {
  slate: {},
  blue: {
    primary: "221.2 83.2% 53.3%",
    "primary-foreground": "210 40% 98%",
  },
  green: {
    primary: "142.1 76.2% 36.3%",
    "primary-foreground": "210 40% 98%",
  },
  red: {
    primary: "0 84.2% 60.2%",
    "primary-foreground": "210 40% 98%",
  },
  yellow: {
    primary: "47.9 95.8% 53.1%",
    "primary-foreground": "0 0% 3.9%",
  },
  purple: {
    primary: "271.5 81.3% 55.9%",
    "primary-foreground": "210 40% 98%",
  },
  pink: {
    primary: "330.4 81.2% 60.4%",
    "primary-foreground": "210 40% 98%",
  },
  orange: {
    primary: "20.5 90.2% 48.2%",
    "primary-foreground": "210 40% 98%",
  },
  indigo: {
    primary: "243.4 75.4% 58.6%",
    "primary-foreground": "210 40% 98%",
  },
};

export type Theme = keyof typeof themes;
export type ThemeConfig = typeof defaultThemeConfig;

export const cardColors = {
  plain: {
    light: {},
    dark: {},
  },
  slate: {
    light: {
      card: "210 40% 98%",
      "card-foreground": "222.2 84% 4.9%",
    },
    dark: {
      card: "222.2 84% 4.9%",
    },
  },
  blue: {
    light: {
      card: "213.8 100% 96.9%",
      "card-foreground": "226.2 57% 21%",
    },
    dark: {
      card: "226.2 57% 21%",
    },
  },
  green: {
    light: {
      card: "138.5 76.5% 96.7%",
      "card-foreground": "144.9 80.4% 10%",
    },
    dark: {
      card: "144.9 80.4% 10%",
    },
  },
  red: {
    light: {
      card: "0 85.7% 97.3%",
      "card-foreground": "0 74.7% 15.5%",
    },
    dark: {
      card: "0 74.7% 15.5%",
    },
  },
  yellow: {
    light: {
      card: "54.5 91.7% 95.3%",
      "card-foreground": "26 83.3% 14.1%",
    },
    dark: {
      card: "26 83.3% 14.1%",
    },
  },
  purple: {
    light: {
      card: "270 100% 98%",
      "card-foreground": "273.5 86.9% 21%",
    },
    dark: {
      card: "273.5 86.9% 21%",
    },
  },
  pink: {
    light: {
      card: "327.3 73.3% 97.1%",
      "card-foreground": "336.2 83.9% 17.1%",
    },
    dark: {
      card: "336.2 83.9% 17.1%",
    },
  },
  orange: {
    light: {
      card: "33.3 100% 96.5%",
      "card-foreground": "13 81.1% 14.5%",
    },
    dark: {
      card: "13 81.1% 14.5%",
    },
  },
  indigo: {
    light: {
      card: "225.9 100% 96.7%",
      "card-foreground": "243.8 47.1% 20%",
    },
    dark: {
      card: "243.8 47.1% 20%",
    },
  },
};
export const cardColorList = Object.keys(cardColors);

export type CardColor = keyof typeof cardColors;

export type ThemeMode = "light" | "dark";

export const relevantThemeConfig = {
  plain: { light: {}, dark: {} },
  slate: {
    light: {},
    dark: {},
  },
  blue: {
    light: {
      muted: "214.3 94.6% 92.7%",
      accent: "214.3 94.6% 92.7%",
    },
    dark: {
      muted: "224.4 64.3% 32.9%",
      accent: "224.4 64.3% 32.9%",
    },
  },
  green: {
    light: {
      muted: "141 78.9% 85.1%",
      accent: "141 78.9% 85.1%",
    },
    dark: {
      muted: "143.8 61.2% 20.2%",
      accent: "143.8 61.2% 20.2%",
    },
  },
  red: {
    light: {
      muted: "0 93.3% 94.1%",
      accent: "0 93.3% 94.1%",
    },
    dark: {
      muted: "0 62.8% 30.6%",
      accent: "0 62.8% 30.6%",
    },
  },
  yellow: {
    light: {
      muted: "54.9 96.7% 82.8%",
      accent: "54.9 96.7% 82.8%",
    },
    dark: {
      muted: "28.4 72.5% 25.7%",
      accent: "28.4 72.5% 25.7%",
    },
  },
  purple: {
    light: {
      muted: "268.7 100% 95.5%",
      accent: "268.7 100% 95.5%",
    },
    dark: {
      muted: "273.6 65.6% 32%",
      accent: "273.6 65.6% 32%",
    },
  },
  pink: {
    light: {
      muted: "325.7 77.8% 94.7%",
      accent: "325.7 77.8% 94.7%",
    },
    dark: {
      muted: "335.9 69% 30.4%",
      accent: "335.9 69% 30.4%",
    },
  },
  orange: {
    light: {
      muted: "34.3 100% 91.8%",
      accent: "34.3 100% 91.8%",
    },
    dark: {
      muted: "15.3 74.6% 27.8%",
      accent: "15.3 74.6% 27.8%",
    },
  },
  indigo: {
    light: {
      muted: "226.5 100% 93.9%",
      accent: "226.5 100% 93.9%",
    },
    dark: {
      muted: "242.2 47.4% 34.3%",
      accent: "242.2 47.4% 34.3%",
    },
  },
};
