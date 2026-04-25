import type { Metadata } from "next";

import { About } from "./_sections/About";
import { Blog } from "./_sections/Blog";
import { Intro } from "./_sections/Intro";
import { Work } from "./_sections/Work";
import { createPageMetadata, SITE_NAME } from "./_utils/seo";
import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "./styles";

export const metadata: Metadata = createPageMetadata({
  title: SITE_NAME,
  description:
    "Chris Krogh is a software engineer building thoughtful product experiences with React, Next.js, and TypeScript.",
  path: "/",
  absoluteTitle: true,
  keywords: ["portfolio", "product engineering"],
});

const Home: React.FC = () => {
  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={CONTENT_CONTAINER_CLASSNAME}>
        <Intro />
        <div className="h-10" />
        <Work />
        <div className="h-10" />
        <Blog />
        <div className="h-10" />
        <About />
      </div>
    </main>
  );
};

export default Home;
