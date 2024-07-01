import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

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
    <div>
      <Content code={post.body.code} />
    </div>
  );
};

export default Page;
