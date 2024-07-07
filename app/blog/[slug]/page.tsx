import { notFound } from "next/navigation";

import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "@/app/styles";
import { Content } from "@/components/Content";

import { getAllBlogPosts, getBlogPostSlug } from "./utils/post";

export const generateStaticParams = async () => {
  return getAllBlogPosts().map((post) => ({
    slug: getBlogPostSlug(post),
  }));
};

type Props = {
  params: { slug: string };
};

const Page: React.FC<Props> = ({ params }) => {
  const post = getAllBlogPosts().find(
    (post) => getBlogPostSlug(post) === params.slug
  );

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
