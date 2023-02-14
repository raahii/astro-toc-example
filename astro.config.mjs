import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [
      "rehype-slug",
      ["rehype-autolink-headings", { behavior: "prepend" }],
      ["rehype-toc", { headings: ["h2", "h3"] }],
    ],
  },
});
