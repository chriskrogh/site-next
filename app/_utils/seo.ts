import type { Metadata } from "next";

import type { Post } from "./post";

export const SITE_URL = "https://www.chriskrogh.com";
export const SITE_NAME = "Chris Krogh";
export const AUTHOR_NAME = "Chris Krogh";
export const TWITTER_HANDLE = "@chriskrogh_";
export const DEFAULT_DESCRIPTION =
  "Software engineer building thoughtful products with React, Next.js, and TypeScript.";

const DEFAULT_KEYWORDS = [
  "Chris Krogh",
  "software engineer",
  "React",
  "Next.js",
  "TypeScript",
];

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  keywords?: string[];
};

export const getAbsoluteUrl = (path: string) =>
  new URL(path, SITE_URL).toString();

export const createPageMetadata = ({
  title,
  description,
  path,
  absoluteTitle = false,
  keywords = [],
}: PageMetadataInput): Metadata => ({
  title: absoluteTitle ? { absolute: title } : title,
  description,
  keywords: [...DEFAULT_KEYWORDS, ...keywords],
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: path,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: TWITTER_HANDLE,
  },
});

export const createBlogPostMetadata = (post: Post): Metadata => {
  const title = post.title ?? SITE_NAME;
  const description = post.description ?? DEFAULT_DESCRIPTION;
  const keywords = post.keywords ?? [];

  return {
    title,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
    alternates: {
      canonical: post.url,
    },
    openGraph: {
      title,
      description,
      url: post.url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [AUTHOR_NAME],
      tags: keywords,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: TWITTER_HANDLE,
    },
  };
};
