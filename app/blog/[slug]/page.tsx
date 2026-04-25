import { format } from "date-fns/format";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";

import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getBlogPostSlug,
} from "@/app/_utils/post";
import { createBlogPostMetadata } from "@/app/_utils/seo";
import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "@/app/styles";

import { RecordHit } from "./RecordHit";

const POSTS = getAllBlogPosts();
const POST_COMPONENTS = {
  "infinite-scroll-server-components": async () =>
    (await import("@/posts/blog/infinite-scroll-server-components.mdx"))
      .default,
  "the-art-of-doing-more": async () =>
    (await import("@/posts/blog/the-art-of-doing-more.mdx")).default,
} satisfies Record<string, () => Promise<ComponentType>>;
type BlogPostSlug = keyof typeof POST_COMPONENTS;

const isBlogPostSlug = (slug: string): slug is BlogPostSlug =>
  slug in POST_COMPONENTS;

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createBlogPostMetadata(post);
};

export const generateStaticParams = async () => {
  return POSTS.map((post) => ({
    slug: getBlogPostSlug(post),
  }));
};

type Props = {
  params: Promise<{ slug: string }>;
};

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  const post = POSTS.find((post) => getBlogPostSlug(post) === slug);

  if (!post || !isBlogPostSlug(slug)) notFound();

  const Content = await POST_COMPONENTS[slug]();

  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={CONTENT_CONTAINER_CLASSNAME}>
        <h2 className="mb-4">{post.title}</h2>
        {post.date ? (
          <h5 className="mb-4 text-slate-700 dark:text-slate-300">
            {format(new Date(post.date), "PPP")}
          </h5>
        ) : null}
        <RecordHit slug={getBlogPostSlug(post)} />
        <Content />
      </div>
    </main>
  );
};

export default Page;
