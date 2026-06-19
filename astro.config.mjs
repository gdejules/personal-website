// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "Lato",
      cssVariable: "--font-lato",
      provider: fontProviders.fontsource(),
      weights: [100, 300, 400, 700, 900],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["sans-serif"],
      formats: ["woff2", "woff"],
    },
    {
      name: "Merriweather",
      cssVariable: "--font-merriweather",
      provider: fontProviders.fontsource(),
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
      weights: ["300 900"],
      stretch: "87% 112%",
      fallbacks: ["serif"],
    },
  ],
  site: "https://randomnauts.netlify.app/",
  integrations: [preact()],
});
