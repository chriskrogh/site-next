import { describe, expect, it } from "vitest";

import { parseAcceptHeader, prefersMarkdown, prefersMediaType } from "@/lib/agent/accept";

describe("parseAcceptHeader", () => {
  it("sorts by q-value descending", () => {
    const ranges = parseAcceptHeader("text/html;q=0.8, text/markdown;q=0.9");

    expect(ranges[0]?.subtype).toBe("markdown");
    expect(ranges[1]?.subtype).toBe("html");
  });

  it("breaks q-value ties by specificity", () => {
    const ranges = parseAcceptHeader("text/*, text/markdown");

    expect(ranges[0]?.subtype).toBe("markdown");
    expect(ranges[1]?.subtype).toBe("*");
  });
});

describe("prefersMediaType", () => {
  it("prefers markdown when it ranks above html", () => {
    expect(
      prefersMediaType("text/markdown, text/html;q=0.9", "text/markdown", "text/html")
    ).toBe(true);
  });

  it("does not prefer markdown when html ranks above markdown", () => {
    expect(
      prefersMediaType("text/html, text/markdown;q=0.5", "text/markdown", "text/html")
    ).toBe(false);
  });

  it("prefers markdown when html is absent", () => {
    expect(prefersMediaType("text/markdown", "text/markdown", "text/html")).toBe(
      true
    );
  });
});

describe("prefersMarkdown", () => {
  it("prefers markdown when explicitly requested", () => {
    expect(prefersMarkdown("text/markdown, text/html;q=0.9")).toBe(true);
  });

  it("does not prefer markdown for wildcard accept headers", () => {
    expect(prefersMarkdown("*/*")).toBe(false);
  });
});
