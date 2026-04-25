import type { MetadataRoute } from "next";

import { getAbsoluteUrl, SITE_URL } from "./_utils/seo";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: getAbsoluteUrl("/sitemap.xml"),
  host: SITE_URL,
});

export default robots;
