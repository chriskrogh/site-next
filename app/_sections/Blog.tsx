import { kv } from "@vercel/kv";
import { allPosts } from "contentlayer/generated";
import { format } from "date-fns/format";
import Link from "next/link";

import { getBlogPostSlug } from "@/app/_utils/post";
import { Card, CardContent } from "@/components/ui/card";

const MAX_POSTS = 3;
const POSTS = allPosts
  .filter((post) => post._raw.flattenedPath.includes("blog"))
  .slice(0, MAX_POSTS);

export const Blog: React.FC = async () => {
  const slugs = POSTS.map((post) => getBlogPostSlug(post));
  const hits = await Promise.all(
    slugs.map(async (slug) => {
      return await kv.get<number>(`hits:${slug}`);
    })
  );
  return (
    <>
      <p className="mb-4">
        I also think about things from time to time, and try to write them down
        whenever I get a chance.
      </p>
      <Card>
        <CardContent className="p-6">
          {POSTS.map((post, index) => (
            <div key={post._raw.flattenedPath}>
              {index > 0 && <hr className="mb-2" />}
              <Link href={post.url}>
                <h4>{post.title}</h4>
                <div className="flex gap-4">
                  {post.date ? (
                    <p>{format(new Date(post.date), "PPP")}</p>
                  ) : null}
                  {hits[index] ? (
                    <p className="text-slate-700 dark:text-slate-300">
                      {hits[index]} views
                    </p>
                  ) : null}
                </div>
              </Link>
              {index < POSTS.length - 1 && <div className="mb-2" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};
