import { format } from "date-fns/format";
import { notFound } from "next/navigation";

import { getAllBlogPosts, getBlogPostSlug } from "@/app/_utils/post";
import { CONTAINER_CLASSNAME, CONTENT_CONTAINER_CLASSNAME } from "@/app/styles";
import { Content } from "@/components/Content";

import { RecordHit } from "./RecordHit";

const POSTS = getAllBlogPosts();

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = POSTS.find((post) => getBlogPostSlug(post) === params.slug);
  return {
    title: post?.title,
    description: post?.description,
  };
};

export const generateStaticParams = async () => {
  return POSTS.map((post) => ({
    slug: getBlogPostSlug(post),
  }));
};

type Props = {
  params: { slug: string };
};

const Page: React.FC<Props> = ({ params }) => {
  const post = POSTS.find((post) => getBlogPostSlug(post) === params.slug);

  if (!post) notFound();

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
        <Content code={post.body.code} />
      </div>
    </main>
  );
};

export default Page;
