import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { allPosts } from "@/app/_utils/post";
import { createPageMetadata } from "@/app/_utils/seo";
import { cn } from "@/lib/utils";
import Content from "@/posts/about.mdx";

import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "../styles";

import { Album } from "./Album";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn more about Chris Krogh, a software engineer focused on product development, React, and thoughtful user experiences.",
  path: "/about",
  keywords: ["about Chris Krogh", "software engineer"],
});

const Page: React.FC = () => {
  const post = allPosts.find((post) => post._raw.flattenedPath === "about");

  if (!post) notFound();

  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={cn(CONTENT_CONTAINER_CLASSNAME, "mb-6")}>
        <Content />
        <Album />
      </div>
    </main>
  );
};

export default Page;
