import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "@/app/styles";

import { Content } from "./Content";

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
};

type Props = {
  params: { slug: string };
};

const Page: React.FC<Props> = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return (
    <main className={CONTAINER_CLASSNAME}>
      <div className={CONTENT_CONTAINER_CLASSNAME}>
        <Content code={post.body.code} />
      </div>
    </main>
  );
};

export default Page;
