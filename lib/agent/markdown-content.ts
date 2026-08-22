import { getAllBlogPosts, getBlogPostBySlug } from "@/app/_utils/post";
import {
  AUTHOR_NAME,
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  getAbsoluteUrl,
} from "@/app/_utils/seo";

export type MarkdownResponse = {
  content: string;
  status?: number;
};

const HOME_MARKDOWN = `# ${SITE_NAME}

${DEFAULT_DESCRIPTION}

I'm ${AUTHOR_NAME}, a Staff Software Engineer at [Faire](https://www.faire.com) building retailer shopping experiences with React, Next.js, and TypeScript. Outside Faire, I shipped [Vings](https://www.vin.gs), a personal finance app for banking, crypto, budgets, and AI-native insights.

## Recent work

### Faire — Staff Software Engineer

- Frontend lead for a retailer shopping assistant, partnering with product and design on what to build and when
- Drove frontend modernization through hooks, Turbopack, codebase decomposition, and faster CI
- Led marketplace speed work across the site using Server Components, prefetching, and resource optimizations

### Vings — Founder / Builder (shipped June 2025)

- Built a personal finance app for banking, crypto, budgets, and goals
- Shipped web, native, and backend experiences with React, Next.js, Expo, and TypeScript
- Added AI-native insights through Today Feed and Copilot experiences

## Writing

I publish essays about React, Next.js, product engineering, and career growth. See [blog](${getAbsoluteUrl("/blog")}) for the full archive.

## Learn more

- [Work history](${getAbsoluteUrl("/work")})
- [About me](${getAbsoluteUrl("/about")})
- [Contact](${getAbsoluteUrl("/contact")})
- [Privacy](${getAbsoluteUrl("/privacy")})
`;

const WORK_MARKDOWN = `# Work

A snapshot of ${AUTHOR_NAME}'s software engineering work at Faire and Vings.

## Faire

Staff Software Engineer (Aug 2026 – present): frontend lead for a shopping assistant that helps retailers discover and buy on Faire. I partner with product and design on roadmap sequencing and tackle the UX and performance problems that make conversational shopping feel fast and trustworthy.

Senior Software Engineer (Feb 2024 – Aug 2026): led performance work across cart, checkout, PDP, and logged-out discovery. Shipped React Server Component migrations, aggressive data prefetching, static generation infrastructure, and React Compiler adoption. Also finished the multi-year hooks and MobX migration, unlocked Turbopack, decomposed product areas out of a deprecated monolith, and improved high-traffic CI pipelines.

Software Engineer II (Feb 2023 – Feb 2024): helped turn Next.js from an exploration into core frontend infrastructure, designed localization and build tooling, and led Faire's first server component page migration.

Software Engineer (Apr 2022 – Feb 2023): modernized Faire's React codebase through hooks, react-query, migration tooling, dashboards, guides, and hundreds of PR reviews.

Frontend Engineer Intern (Jan 2021 – Apr 2021): built retailer apparel features for Winter market and internal tooling for Jira reminders.

## Vings

Founder / Builder (shipped June 2025): shipped [Vings](https://www.vin.gs), a personal finance app for banking and crypto wealth. The product connects accounts, transactions, budgets, goals, portfolio tracking, and pricing across web and mobile, with AI-native Today Feed insights and a financial copilot. Built with React, Next.js, Expo, TypeScript, tRPC, and Postgres.
`;

const ABOUT_MARKDOWN = `# About ${AUTHOR_NAME}

I grew up in Trinidad and always loved building things. I studied Computer Science at the University of Waterloo because of their co-op program, learned React in my first semester, and fell in love with shipping products people use.

After graduating, I moved to Toronto and joined [Faire](https://www.faire.com) full-time. I focus on frontend product engineering with React, Next.js, Expo, and TypeScript, and I enjoy working on performance, developer experience, and thoughtful user experiences.

## Background

- University of Waterloo — Bachelor of Computer Science (Statistics Minor), 2017–2022
- Five internships across product engineering teams before returning to Faire full time
- Currently Staff Software Engineer at Faire; previously built and shipped Vings

## Links

- [Work](${getAbsoluteUrl("/work")})
- [Blog](${getAbsoluteUrl("/blog")})
- [Contact](${getAbsoluteUrl("/contact")})
- [GitHub](https://github.com/chriskrogh)
- [LinkedIn](https://www.linkedin.com/in/christopherkrogh/)
`;

const CONTACT_MARKDOWN = `# Contact

The best way to reach ${AUTHOR_NAME} for professional conversations is through LinkedIn. I read messages there regularly and respond to engineering, product, and collaboration inquiries related to React, Next.js, frontend performance, and product engineering.

## Professional inquiries

- [LinkedIn](https://www.linkedin.com/in/christopherkrogh/): hiring, consulting, speaking, or collaboration requests
- [GitHub](https://github.com/chriskrogh): open-source discussions and technical questions on public repositories
- [X / Twitter](https://x.com/chriskrogh_): shorter technical notes and public conversation

## What to include

If you are reaching out about work or a project, a short note with context helps: what you are building, the timeline, and how my experience with React, Next.js, Expo, or product engineering might be relevant. I am especially interested in frontend architecture, performance work, and teams shipping polished product experiences.

## Other pages

- [About](${getAbsoluteUrl("/about")})
- [Work](${getAbsoluteUrl("/work")})
- [Blog](${getAbsoluteUrl("/blog")})
- [Privacy](${getAbsoluteUrl("/privacy")})
- [Sitemap](${getAbsoluteUrl("/sitemap.xml")})
- [llms.txt](${getAbsoluteUrl("/llms.txt")})
`;

const PRIVACY_MARKDOWN = `# Privacy Policy

This privacy policy describes how ${SITE_NAME} (${SITE_URL}) handles information when you visit this personal portfolio site.

## What this site collects

This site is a static portfolio and blog. I do not sell personal information, run advertising trackers, or operate user accounts on this domain. Basic hosting analytics from the deployment provider may record request metadata such as IP address, browser type, and pages visited for security and reliability.

## Blog hit counters

Some blog posts display a lightweight hit counter backed by a server-side key-value store. These counters store aggregate visit counts tied to post slugs, not individual visitor profiles. They are used only to show how often a post has been viewed.

## Third-party links

Pages on this site link to external services such as GitHub, LinkedIn, X, Faire, and Vings. Those services have their own privacy policies and may collect information when you visit them.

## Contact

Questions about this policy can be sent through [LinkedIn](https://www.linkedin.com/in/christopherkrogh/) or the [contact page](${getAbsoluteUrl("/contact")}).

## Updates

I may update this policy when site functionality changes. The current version is published at ${getAbsoluteUrl("/privacy")}.

Last updated: August 2026.
`;

const getBlogIndexMarkdown = () => {
  const posts = getAllBlogPosts()
    .sort(
      (left, right) =>
        new Date(right.date ?? 0).getTime() -
        new Date(left.date ?? 0).getTime()
    )
    .map((post) => {
      const slug = post._raw.flattenedPath.replace("blog/", "");
      return `- [${post.title}](${getAbsoluteUrl(`/blog/${slug}`)}): ${post.description ?? ""}`;
    })
    .join("\n");

  return `# Blog

Articles from ${AUTHOR_NAME} about software engineering, React, Next.js, product work, and engineering career growth.

${posts}
`;
};

const getBlogPostMarkdown = (slug: string): MarkdownResponse | null => {
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return null;
  }

  const content = `# ${post.title ?? "Blog post"}

${post.description ?? ""}

Published: ${post.date ?? "unknown"}

Read the full article at ${getAbsoluteUrl(`/blog/${slug}`)}.
`;

  return { content };
};

export const getNotFoundMarkdown = (pathname: string) =>
  `# 404 — Page not found

No page exists at \`${pathname}\` on ${SITE_URL}.

## Where to look next

- [Home](${getAbsoluteUrl("/")})
- [About](${getAbsoluteUrl("/about")})
- [Work](${getAbsoluteUrl("/work")})
- [Blog](${getAbsoluteUrl("/blog")})
- [Contact](${getAbsoluteUrl("/contact")})
- [Privacy](${getAbsoluteUrl("/privacy")})
- [Sitemap](${getAbsoluteUrl("/sitemap.xml")})
- [llms.txt](${getAbsoluteUrl("/llms.txt")})
`;

const STATIC_MARKDOWN: Record<string, string> = {
  "/": HOME_MARKDOWN,
  "/about": ABOUT_MARKDOWN,
  "/work": WORK_MARKDOWN,
  "/contact": CONTACT_MARKDOWN,
  "/privacy": PRIVACY_MARKDOWN,
};

export const KNOWN_PAGE_PATHS = new Set([
  "/",
  "/about",
  "/work",
  "/blog",
  "/contact",
  "/privacy",
  ...getAllBlogPosts().map(
    (post) => `/blog/${post._raw.flattenedPath.replace("blog/", "")}`
  ),
]);

export const getMarkdownForPath = (pathname: string): MarkdownResponse | null => {
  const normalizedPath =
    pathname.endsWith("/") && pathname.length > 1
      ? pathname.slice(0, -1)
      : pathname;

  if (normalizedPath in STATIC_MARKDOWN) {
    return { content: STATIC_MARKDOWN[normalizedPath] };
  }

  if (normalizedPath === "/blog") {
    return { content: getBlogIndexMarkdown() };
  }

  const blogMatch = normalizedPath.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    return getBlogPostMarkdown(blogMatch[1]);
  }

  return null;
};

export const shouldReturnMarkdownNotFound = (pathname: string) => {
  const normalizedPath =
    pathname.endsWith("/") && pathname.length > 1
      ? pathname.slice(0, -1)
      : pathname;

  return !KNOWN_PAGE_PATHS.has(normalizedPath);
};
