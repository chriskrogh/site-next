import { siteJsonLd } from "@/lib/agent/json-ld";

export const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
  />
);
