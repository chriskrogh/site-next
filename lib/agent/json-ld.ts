import {
  AUTHOR_NAME,
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/app/_utils/seo";

const SAME_AS = [
  "https://github.com/chriskrogh",
  "https://x.com/chriskrogh_",
  "https://www.linkedin.com/in/christopherkrogh/",
];

const CONTACT_POINT = {
  "@type": "ContactPoint",
  contactType: "professional inquiries",
  url: "https://www.linkedin.com/in/christopherkrogh/",
};

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Toronto",
  addressRegion: "ON",
  addressCountry: "CA",
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  jobTitle: "Staff Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Faire",
    url: "https://www.faire.com",
  },
  sameAs: SAME_AS,
  address: POSTAL_ADDRESS,
  contactPoint: CONTACT_POINT,
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  sameAs: SAME_AS,
  contactPoint: CONTACT_POINT,
  address: POSTAL_ADDRESS,
};

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [personJsonLd, organizationJsonLd],
};
