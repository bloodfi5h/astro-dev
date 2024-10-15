import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://aiastro-dev.netlify.app/",
  integrations: [preact()]
});