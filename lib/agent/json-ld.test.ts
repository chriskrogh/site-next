import { describe, expect, it } from "vitest";

import { organizationJsonLd, personJsonLd } from "@/lib/agent/json-ld";

describe("json-ld", () => {
  it("includes Person schema with sameAs links", () => {
    expect(personJsonLd["@type"]).toBe("Person");
    expect(personJsonLd.sameAs).toContain("https://github.com/chriskrogh");
    expect(personJsonLd.url).toBe("https://www.chriskrogh.com");
  });

  it("includes Organization schema with contactPoint and address", () => {
    expect(organizationJsonLd["@type"]).toBe("Organization");
    expect(organizationJsonLd.contactPoint).toMatchObject({
      contactType: "professional inquiries",
    });
    expect(organizationJsonLd.address).toMatchObject({
      addressLocality: "Toronto",
      addressCountry: "CA",
    });
  });
});
