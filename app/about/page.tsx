import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Content } from "@/components/Content";
import { cn } from "@/lib/utils";

import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "../styles";

import { Album } from "./Album";

const Page: React.FC = () => {
  const post = allPosts.find((post) => post._raw.flattenedPath === "about");

  if (!post) notFound();

  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={cn(CONTENT_CONTAINER_CLASSNAME, "mb-6")}>
        <Content code={post.body.code} />
        <Album />
      </div>
    </main>
  );
};

export default Page;
