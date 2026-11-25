// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// SITE: the public URL. Change it when a custom domain is connected (see README).
export default defineConfig({
  // An unset repository variable arrives as an empty string, so fall back on "" as well as undefined.
  site: process.env.SITE_URL || "https://simsimeee.github.io",
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: "github-light" } },
});
