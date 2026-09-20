import type { MetadataRoute } from "next";

import { getPublicBlogPosts } from "./_utils/post";
import { getAbsoluteUrl } from "./_utils/seo";

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: getAbsoluteUrl("/"),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: getAbsoluteUrl("/about"),
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    url: getAbsoluteUrl("/contact"),
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  },
  {
    url: getAbsoluteUrl("/privacy"),
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: getAbsoluteUrl("/work"),
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    url: getAbsoluteUrl("/blog"),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
];

const sitemap = (): MetadataRoute.Sitemap => [
  ...staticRoutes,
  ...getPublicBlogPosts().map((post) => ({
    url: getAbsoluteUrl(post.url),
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
];

export default sitemap;
