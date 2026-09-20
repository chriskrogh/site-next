import { describe, expect, it } from "vitest";

import {
  getMarkdownForPath,
  getNotFoundMarkdown,
  shouldReturnMarkdownNotFound,
} from "@/lib/agent/markdown-content";

describe("getMarkdownForPath", () => {
  it("returns homepage markdown with an H1", () => {
    const response = getMarkdownForPath("/");

    expect(response?.status ?? 200).toBe(200);
    expect(response?.content.startsWith("# Chris Krogh")).toBe(true);
    expect(response?.content.length).toBeGreaterThan(500);
  });

  it("returns markdown for trust anchor pages", () => {
    expect(getMarkdownForPath("/contact")?.content).toContain("# Contact");
    expect(getMarkdownForPath("/privacy")?.content).toContain(
      "# Privacy Policy"
    );
    expect(getMarkdownForPath("/about")?.content).toContain(
      "# About Chris Krogh"
    );
  });

  it("returns markdown summaries for blog posts", () => {
    const response = getMarkdownForPath(
      "/blog/infinite-scroll-server-components"
    );

    expect(response?.content).toContain(
      "Infinite Scroll Server Components with Next.js and react-query"
    );
  });

  it("keeps private posts out of the index but available by direct path", () => {
    const index = getMarkdownForPath("/blog");
    const privatePost = getMarkdownForPath("/blog/what-pops-built");

    expect(index?.content).not.toContain("What Pops Built");
    expect(privatePost?.content).toContain("What Pops Built");
  });
});

describe("getNotFoundMarkdown", () => {
  it("includes recovery links for agents", () => {
    const markdown = getNotFoundMarkdown("/missing-page");

    expect(markdown).toContain("404");
    expect(markdown).toContain("/sitemap.xml");
    expect(markdown).toContain("/llms.txt");
    expect(markdown).toContain("/missing-page");
  });
});

describe("shouldReturnMarkdownNotFound", () => {
  it("returns true for unknown paths", () => {
    expect(shouldReturnMarkdownNotFound("/does-not-exist")).toBe(true);
  });

  it("returns false for known pages", () => {
    expect(shouldReturnMarkdownNotFound("/contact")).toBe(false);
    expect(shouldReturnMarkdownNotFound("/privacy")).toBe(false);
  });
});
