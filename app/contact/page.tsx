import type { Metadata } from "next";

import { createPageMetadata } from "@/app/_utils/seo";

import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "../styles";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "How to reach Chris Krogh for professional inquiries about React, Next.js, frontend performance, and product engineering.",
  path: "/contact",
  keywords: ["contact Chris Krogh", "software engineer contact"],
});

const Page: React.FC = () => {
  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={CONTENT_CONTAINER_CLASSNAME}>
        <h1 className="mb-6 text-3xl font-semibold tracking-tight font-heading scroll-m-20">
          Contact
        </h1>
        <p className="mb-4">
          The best way to reach me for professional conversations is through
          LinkedIn. I read messages there regularly and respond to engineering,
          product, and collaboration inquiries related to React, Next.js,
          frontend performance, and product engineering.
        </p>
        <h2 className="mb-4 mt-8">Professional inquiries</h2>
        <ul className="mb-4 pl-4" style={{ listStyleType: "square" }}>
          <li className="mb-2">
            <a
              href="https://www.linkedin.com/in/christopherkrogh/"
              className="underline"
              target="_blank"
            >
              LinkedIn
            </a>
            : hiring, consulting, speaking, or collaboration requests
          </li>
          <li className="mb-2">
            <a
              href="https://github.com/chriskrogh"
              className="underline"
              target="_blank"
            >
              GitHub
            </a>
            : open-source discussions and technical questions on public
            repositories
          </li>
          <li>
            <a
              href="https://x.com/chriskrogh_"
              className="underline"
              target="_blank"
            >
              X / Twitter
            </a>
            : shorter technical notes and public conversation
          </li>
        </ul>
        <h2 className="mb-4 mt-8">What to include</h2>
        <p className="mb-4">
          If you are reaching out about work or a project, a short note with
          context helps: what you are building, the timeline, and how my
          experience with React, Next.js, Expo, or product engineering might be
          relevant. I am especially interested in frontend architecture,
          performance work, and teams shipping polished product experiences.
        </p>
        <p>
          For general site navigation, see the{" "}
          <a href="/about" className="underline">about page</a>,{" "}
          <a href="/work" className="underline">work history</a>, or{" "}
          <a href="/blog" className="underline">blog</a>.
        </p>
      </div>
    </main>
  );
};

export default Page;
