import type { Metadata } from "next";

import { getAllBlogPosts } from "@/app/_utils/post";
import { createPageMetadata } from "@/app/_utils/seo";

import { BlogListItem } from "../_components/BlogListItem";
import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "../styles";

const POSTS = getAllBlogPosts();

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description:
    "Articles from Chris Krogh about software engineering, React, Next.js, product work, and engineering career growth.",
  path: "/blog",
  keywords: ["software engineering blog", "React blog", "Next.js blog"],
});

const Page: React.FC = () => {
  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={CONTENT_CONTAINER_CLASSNAME}>
        {POSTS.map((post, index) => (
          <div key={post._id}>
            {index > 0 && <hr className="mb-2" />}
            <BlogListItem post={post} />
            {index < POSTS.length - 1 && <div className="mb-2" />}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
