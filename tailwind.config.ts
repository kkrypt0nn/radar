import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Geist"', ...defaultTheme.fontFamily.sans],
      mono: ['"GeistMono"', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-muted": "var(--color-primary-muted)",
        "primary-accent": "var(--color-primary-accent)",
        secondary: "var(--color-secondary)",
        "secondary-muted": "var(--color-secondary-muted)",
        "secondary-accent": "var(--color-secondary-accent)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        background: "var(--color-background)",
        "background-muted": "var(--color-background-muted)",
        "card-background": "var(--color-card-background)",
        "card-border": "var(--color-card-border)",
        "filter-enabled": "var(--color-filter-enabled)",
        "filter-disabled": "var(--color-filter-disabled)",
        "code-background": "var(--color-code-background)",
        "tab-foreground": "var(--color-tab-foreground)",
        "tab-background": "var(--color-tab-background)",
      },
    },
  },
  plugins: [],
} satisfies Config;
