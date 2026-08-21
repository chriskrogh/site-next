import type { Metadata } from "next";

import { createPageMetadata, SITE_URL } from "@/app/_utils/seo";

import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "../styles";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy",
  description:
    "Privacy policy for chriskrogh.com covering analytics, blog hit counters, third-party links, and contact information.",
  path: "/privacy",
  keywords: ["privacy policy", "chriskrogh.com privacy"],
});

const Page: React.FC = () => {
  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={CONTENT_CONTAINER_CLASSNAME}>
        <h1 className="mb-6 text-3xl font-semibold tracking-tight font-heading scroll-m-20">
          Privacy Policy
        </h1>
        <p className="mb-4">
          This privacy policy describes how Chris Krogh ({SITE_URL}) handles
          information when you visit this personal portfolio site.
        </p>
        <h2 className="mb-4 mt-8">What this site collects</h2>
        <p className="mb-4">
          This site is a static portfolio and blog. I do not sell personal
          information, run advertising trackers, or operate user accounts on
          this domain. Basic hosting analytics from the deployment provider may
          record request metadata such as IP address, browser type, and pages
          visited for security and reliability.
        </p>
        <h2 className="mb-4 mt-8">Blog hit counters</h2>
        <p className="mb-4">
          Some blog posts display a lightweight hit counter backed by a
          server-side key-value store. These counters store aggregate visit
          counts tied to post slugs, not individual visitor profiles. They are
          used only to show how often a post has been viewed.
        </p>
        <h2 className="mb-4 mt-8">Third-party links</h2>
        <p className="mb-4">
          Pages on this site link to external services such as GitHub, LinkedIn,
          X, Faire, and Vings. Those services have their own privacy policies
          and may collect information when you visit them.
        </p>
        <h2 className="mb-4 mt-8">Contact</h2>
        <p className="mb-4">
          Questions about this policy can be sent through{" "}
          <a
            href="https://www.linkedin.com/in/christopherkrogh/"
            className="underline"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          or the{" "}
          <a href="/contact" className="underline">contact page</a>.
        </p>
        <p>Last updated: August 2026.</p>
      </div>
    </main>
  );
};

export default Page;
