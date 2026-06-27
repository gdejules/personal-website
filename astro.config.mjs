// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "Lato",
      cssVariable: "--font-lato",
      provider: fontProviders.fontsource(),
      weights: [100, 300, 400, 700, 900],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
      formats: ["woff2", "woff"],
      display: "swap",
    },
    {
      name: "Merriweather",
      cssVariable: "--font-merriweather",
      provider: fontProviders.fontsource(),
      styles: ["normal", "italic"],
      subsets: ["latin"],
      weights: ["300 900"],
      stretch: "87% 112%",
      fallbacks: ["serif"],
      display: "swap",
    },
  ],
  site: "https://randomnauts.netlify.app/",
  integrations: [preact(), mdx()],
});