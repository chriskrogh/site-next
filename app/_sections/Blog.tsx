import { allPosts } from "contentlayer/generated";
import { format } from "date-fns/format";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

const MAX_POSTS = 3;

export const Blog: React.FC = () => {
  return (
    <>
      <p className="mb-4">
        I also think about things from time to time, and try to write them down
        whenever I get a chance.
      </p>
      <Card>
        <CardContent className="p-6">
          {allPosts.slice(0, MAX_POSTS).map((post, index) => (
            <div key={post._raw.flattenedPath}>
              {index !== 0 && <hr className="mb-2" />}
              <Link href={post.url}>
                <h3>{post.title}</h3>
                <p>{format(new Date(post.date), "PPP")}</p>
              </Link>
              {index < allPosts.length - 1 && <div className="mb-2" />}
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};
